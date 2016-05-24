import React from 'react'

class DetailTable extends React.Component {
    render() {
        console.log( this.props )
        let { general, reqHeaders, resHeaders, url, query, type } = this.props,
            queryElement = ''
        console.log( 'QUERY = ', query )

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
            <ul className="tab">
                <li className="tab-item active">Headers</li>
                <li className="tab-item">Preview</li>
                <li className="tab-item">Response</li>
            </ul>
            <div className="tab-content">
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
                <div></div>
                <div></div>
            </div>
        </div>
    }
}

export default DetailTable
