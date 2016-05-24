import React from 'react'

const ACTIVE = 'active'

class DetailTable extends React.Component {
    constructor() {
        super()
        this.changeTab = this.changeTab.bind( this )
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
        console.log( this.props )
        let { general, reqHeaders, resHeaders, url, query, body, type } = this.props,
            queryElement = ''

        if ( query ) {
            queryElement = ( <section>
                <h4>Query String Parameters</h4>
                <ul>
                    { query.map( ( [ key, value ] ) => {
                        return <li key={ key }><b>{ key }:</b> { value }</li>
                    } ) }
                </ul>
            </section>)
        }

        return <div className="detail-table">
            <ul className="tab" onClick={ this.changeTab }>
                <li className="tab-item active" ref="tab-item-0" data-index="0">Headers</li>
                <li className="tab-item" ref="tab-item-1" data-index="1">Preview</li>
                <li className="tab-item" ref="tab-item-2" data-index="2">Response</li>
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
                    <section>
                        <h4>Response Headers</h4>
                        <ul>
                            { resHeaders.map( ( [ key, value ] ) => {
                                return <li key={ key }><b>{ key }:</b> { value }</li>
                            } ) }
                        </ul>
                    </section>
                    <section>
                        <h4>Request Headers</h4>
                        <ul>
                            { reqHeaders.map( ( [ key, value ] ) => {
                                return <li key={ key }><b>{ key }:</b> { value }</li>
                            } ) }
                        </ul>
                    </section>
                    { queryElement }
                </div>
                <div className="tab-content-item" ref="content-1">

                </div>
                <div className="tab-content-item" ref="content-2"></div>
            </div>
        </div>
    }
}

export default DetailTable
