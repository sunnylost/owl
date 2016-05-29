import React from 'react'
import Console from '../containers/console'

let baseID   = 0
const ACTIVE = 'active',
    randomID = () => baseID++

class DetailTable extends React.Component {
    constructor() {
        super()
        this.changeTab = this.changeTab.bind( this )
    }

    //TODO
    generatePreview( { type, url, body } ) {
        if ( type === 'img' ) {
            return <img className="preview" src={ url }/>
        } else if ( type === 'json' ) {
            let obj      = JSON.parse( body ),
                result,
                generate = obj => {
                    let result = Object.keys( obj ).map( key => {
                        let value     = obj[ key ],
                            type      = typeof value,
                            realType  = Array.isArray( value ) ? 'array' : type,
                            className = `value ${ realType }`

                        return <li key={ randomID() }><b className="key">{ key }:</b> <span
                            className={ className }>{ type === 'object' ? generate( value ) : String( value ) }</span>
                        </li>
                    } )

                    return result.length ? <ul>{ result }</ul> : result
                }

            result = generate( obj )

            return result
        } else {
            return body
        }
    }

    changeTab( e ) {
        let refs   = this.refs,
            target = e.target,
            cur    = this.refs[ `content-${target.dataset.index}` ]

        if ( target.classList.contains( ACTIVE ) ) {
            return
        }

        for ( let key in this.refs ) {
            refs[ key ].classList.remove( ACTIVE )
        }

        target.classList.add( ACTIVE )
        cur.classList.add( ACTIVE )
    }

    render() {
        let { general, reqHeaders, resHeaders, url, query, body, type } = this.props,
            queryElement = '',
            bodyElement, previewElement

        if ( query ) {
            queryElement = ( <section className="headers">
                <h4>Query String Parameters</h4>
                <ul>
                    { query.map( ( [ key, value ] ) => {
                        return <li key={ key }><b>{ key }:</b> { value }</li>
                    } ) }
                </ul>
            </section>)
        }

        if ( body.length ) {
            previewElement = this.generatePreview( { type, url, body } )
            bodyElement    = body
        } else {
            bodyElement = <p className="blank">This Request has no response data available.</p>
        }

        return <div className="detail-table">
            <ul className="tab" onClick={ this.changeTab }>
                <li className="tab-item active" ref="tab-item-0" data-index="0">Headers</li>
                <li className="tab-item" ref="tab-item-1" data-index="1">Preview</li>
                <li className="tab-item" ref="tab-item-2" data-index="2">Response</li>
                <li className="tab-item" ref="tab-item-3" data-index="3">Console</li>
            </ul>
            <div className="tab-content">
                <div className="tab-content-item active" ref="content-0">
                    <section>
                        <h4>General</h4>
                        <ul>
                            <li><b>Request URL:</b> { url }</li>
                            <li><b>Request Method:</b> { general.method }</li>
                            <li><b>Status Code:</b> { general.status }</li>
                        </ul>
                    </section>
                    <section className="headers">
                        <h4>Response Headers</h4>
                        <ul>
                            { resHeaders.map( ( [ key, value ] ) => {
                                return <li key={ key }><b>{ key }:</b> { value }</li>
                            } ) }
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
                <div className="tab-content-item preview" ref="content-1">
                    { previewElement }
                </div>
                <div className="tab-content-item" ref="content-2">
                    { bodyElement }
                </div>
                <div className="tab-content-item" ref="content-3">
                    <Console />
                </div>
            </div>
        </div>
    }
}

export default DetailTable
