import React from 'react'
import CookiePanel from './cookiePanel'

let JSBeautify  = require( 'js-beautify' ).js_beautify,
    CSSBeautify = require( 'cssbeautify' ),
    baseID      = 0,
    currentID   = 0,
    beautify    = {
        js( code ) {
            return JSBeautify( code, {
                indent_size: 2
            } )
        },

        css( code ) {
            return CSSBeautify( code, {
                indent       : '  ',
                autosemicolon: true
            } )
        }
    }

const ACTIVE        = 'active',
      FOLD          = 'fold',
      UNFOLD        = 'unfold',
      FOLDER        = 'js-folder',
      CARET_RIGHT   = 'fa-caret-right',
      CARET_DOWN    = 'fa-caret-down',
      ENCODE_TEXT   = 'view URL encoded',
      DECODE_TEXT   = 'view decoded',
      PREVIEW_INDEX = 1,
      randomID      = () => baseID++

class DetailTable extends React.Component {
    constructor( props ) {
        super( props )

        this.state             = {
            curIndex        : 0,
            isQueryEncode   : false,  //true 表示显示编码参数, false 表示参数已解码
            encodeStatusText: ENCODE_TEXT,
            needPrettyPrint : false, // 切换到 preview 面板时为 true
            isPrettyPrinted : false  // pretty 结束后为 true
        }
        this.changeTab         = this.changeTab.bind( this )
        this.toggleFolder      = this.toggleFolder.bind( this )
        this.changeQueryEncode = this.changeQueryEncode.bind( this )
    }

    componentWillReceiveProps( nextProps ) {
        if ( currentID != nextProps.id ) {
            this.setState( {
                needPrettyPrint: this.state.curIndex == PREVIEW_INDEX,
                isPrettyPrinted: false
            } )
            currentID = nextProps.id
        }
    }

    componentWillUpdate( nextProps, nextState ) {
        if ( nextState.needPrettyPrint && !nextState.isPrettyPrinted ) {
            setTimeout( () => this.prettyPrint(), 0 )
        }
    }

    toggleFolder( e ) {
        let target    = e.target,
            el        = target.parentNode,
            classList = el.classList

        if ( classList.contains( FOLDER ) ) {
            if ( classList.contains( FOLD ) ) {
                classList.remove( FOLD )
                classList.add( UNFOLD )
                target.classList.remove( CARET_RIGHT )
                target.classList.add( CARET_DOWN )
            } else {
                classList.remove( UNFOLD )
                classList.add( FOLD )
                target.classList.remove( CARET_DOWN )
                target.classList.add( CARET_RIGHT )
            }
        }
    }

    changeQueryEncode() {
        this.setState( {
            isQueryEncode   : !this.state.isQueryEncode,
            encodeStatusText: !this.state.isQueryEncode ? DECODE_TEXT : ENCODE_TEXT
        } )
    }

    //TODO
    generatePreview( { type, url, body } ) {
        if ( type === 'img' ) {
            return <img className="preview" src={ url }/>
        } else if ( type === 'json' ) {
            let obj      = JSON.parse( body ),
                //TODO
                generate = ( obj ) => {
                    let result = Object.keys( obj ).map( key => {
                        let value       = obj[ key ],
                            type        = typeof value,
                            realType    = Array.isArray( value ) ? 'array' : type,
                            className   = `value ${ realType }`,
                            hasChildren = realType === 'object' || realType === 'array',
                            icon

                        if ( hasChildren ) {
                            icon = <i className="fa fa-caret-right" onClick={ e => this.toggleFolder( e ) }></i>
                        }

                        return <li key={ randomID() } className={ hasChildren ? 'fold js-folder' : '' }>
                            { icon }
                            <b className="key">{ key }: </b>
                            <span
                                className={ className }>{ hasChildren ? generate( value ) : String( value ) }</span>
                        </li>
                    } )

                    return result ? <ul className="folder-wrap">{ result }</ul> : result
                }

            return generate( obj )
        } else {
            return body
        }
    }

    changeTab( e ) {
        let index = e.target.dataset.index

        this.setState( {
            curIndex       : index,
            needPrettyPrint: index == PREVIEW_INDEX
        } )
    }

    prettyPrint() {
        let el   = this.refs[ 'content-1' ],
            type = el.dataset.type

        if ( beautify[ type ] ) {
            el.innerHTML = `<pre class="code"><code class="${ type }">${ beautify[ type ]( el.innerHTML ) }</code></pre>`
            hljs.highlightBlock( el.querySelector( 'code' ) )
        }

        this.setState( {
            isPrettyPrinted: true
        } )
    }

    render() {
        let { general, reqHeaders, resHeaders, url, query, body, type } = this.props,
            queryElement      = '',
            tabItems          = [
                'headers',
                'Preview',
                'Response',
                'Cookie'
            ],
            tabContentClasses = [
                'tab-content-item ',
                'tab-content-item preview ',
                'tab-content-item ',
                'tab-content-item '
            ],
            isQueryEncode     = this.state.isQueryEncode,
            bodyElement, previewElement,

            generateContent   = ( className, index ) => {
                if ( index == this.state.curIndex ) {
                    className += ACTIVE
                }

                switch ( index ) {
                    case 0:
                        return <div key={ index } className={ className } ref={ 'content-0' }>
                            <section>
                                <h4>General</h4>
                                <ul>
                                    <li><b>Request URL:</b> { url }</li>
                                    <li><b>Request Method:</b> { general.method }</li>
                                    <li><b>Status Code:</b> { general.status }</li>
                                </ul>
                            </section>
                            < section
                                className="headers">
                                <h4>Response Headers</h4>
                                <ul>
                                    { resHeaders.map( ( [ key, value ] ) => {
                                        return <li key={ key }><b>{ key }:</b> { value }</li>
                                    } )
                                    }
                                </ul>
                            </section>
                            <section className="headers">
                                <h4>Request Headers</h4>
                                <ul>
                                    { reqHeaders.map( ( [ key, value ] ) => {
                                        return <li key={ key }><b>{ key }:</b> { value }</li>
                                    } ) }
                                </ul>
                            </section>
                            { queryElement }
                        </div>

                    case 1:
                        return <div
                            key={ index }
                            className={ className }
                            ref={ 'content-1' }
                            data-type={ type }>
                            { previewElement }
                        </div>

                    case 2:
                        return <div key={ index } className={ className } ref="content-2">
                            { bodyElement }
                        </div>

                    case 3:
                        return <CookiePanel req={ reqHeaders } res={ resHeaders }/>
                }
            }

        if ( query ) {
            queryElement = ( <section className="headers">
                <h4>Query String Parameters</h4><a className="encode-link" href="#"
                                                   onClick={ this.changeQueryEncode }>{ this.state.encodeStatusText }</a>
                <ul>
                    { query.map( ( [ key, value ] ) => {
                        return <li key={ key }><b>{ key }:</b> { isQueryEncode ? value : decodeURIComponent( value ) }
                        </li>
                    } ) }
                </ul>
            </section>)
        }

        if ( body.length ) {
            previewElement = this.generatePreview( { type, url, body } )
            bodyElement    = type == 'img' ? '' : body
        } else {
            bodyElement = <p className="blank">This Request has no response data available.</p>
        }

        return <div className="detail-table">
            <ul className="tab" onClick={ this.changeTab }>
                { tabItems.map( ( item, index ) => {
                    let className = `tab-item ${ index == this.state.curIndex ? ACTIVE : '' }`
                    return <li key={ index }
                               className={ className }
                               ref={ `tab-item-${ index }` }
                               data-index={ index }
                    >{ item }</li>
                } )}
            </ul>
            <div className="tab-content">
                {
                    tabContentClasses.map( ( item, index ) => generateContent( item, index ) )
                }
            </div>
        </div>
    }
}

export default DetailTable
