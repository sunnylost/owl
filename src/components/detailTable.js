import React from 'react'

class DetailTable extends React.Component {
    render() {
        console.log( this.props )
        return <div className="detail-table">
            <ul className="tab">
                <li className="tab-item">Headers</li>
                <li className="tab-item">Preview</li>
                <li className="tab-item">Response</li>
            </ul>
            <div className="tab-content">
                <div>
                    <h4>General</h4>
                    <dl>
                        <dt></dt>
                    </dl>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    }
}

export default DetailTable
