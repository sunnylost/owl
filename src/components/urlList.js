import React from 'react'
import URLItem from './urlItem'

const URLList = ( { urls, displayDetail }={} ) => (
    <div className="list js-flexible">
        <div className="url col col-header js-col">
            <div className="piece"></div>
            <div className="piece">Name</div>
            <div className="piece">Status</div>
            <div className="piece">Method</div>
            <div className="piece">Domain</div>
            <div className="piece">Type</div>
        </div>
        {
            urls.map( ( data ) => {
                return <URLItem key={ data.id } displayDetail={ displayDetail } data={ data }/>
            } )
        }
    </div>
)

export default URLList
