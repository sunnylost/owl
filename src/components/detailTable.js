import React from 'react'

class DetailTable extends React.Component {
    render() {
        console.log( this.props )
        let { general, reqHeaders, resHeaders, url, type } = this.props,
            reqHeadersArray = [],
            resHeadersArray = [],
            key

        for ( key in reqHeaders ) {
            reqHeadersArray.push( <li key={ key }><b>{ key }:</b> { reqHeaders[ key ] }</li> )
        }

        for ( key in resHeaders ) {
            resHeadersArray.push( <li key={ key }><b>{ key}:</b> { resHeaders[ key ] }</li> )
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
                        { resHeadersArray }
                    </ul>
                </section>
                <section>
                    <h4>Request Headers</h4>
                    <ul>
                        { reqHeadersArray }
                    </ul>
                </section>
                <div></div>
                <div></div>
            </div>
        </div>
    }
}

export default DetailTable
