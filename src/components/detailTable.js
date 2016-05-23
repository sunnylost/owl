import React from 'react'

class DetailTable extends React.Component {
    render() {
        console.log( this.props )
        let { headers, url, type } = this.props,
            responseHeaders = []

        for ( let key in headers ) {
            responseHeaders.push( <li>{ key}: { headers[ key ] }</li> )
        }


        return <div className="detail-table">
            <ul className="tab">
                <li className="tab-item">Headers</li>
                <li className="tab-item">Preview</li>
                <li className="tab-item">Response</li>
            </ul>
            <div className="tab-content">
                <section>
                    <h4>General</h4>
                    <ul>
                        <li>Request URL: { url }</li>
                        <li>Request Method:</li>
                        <li>Status Code:</li>
                    </ul>
                </section>
                <section>
                    <h4>Response Headers</h4>
                    <ul>
                        { responseHeaders }
                    </ul>
                </section>
                <section>
                    <h4>Request Headers</h4>
                </section>
                <div></div>
                <div></div>
            </div>
        </div>
    }
}

export default DetailTable
