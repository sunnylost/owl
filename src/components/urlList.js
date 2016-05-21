import React from 'react'
import URLItem from './urlItem'

const URLList = ( { urls, displayDetail }={} ) => (
    <ul className="list">
        {
            urls.map( ( data ) => {
                return <URLItem key={ data.id } displayDetail={ displayDetail } data={ data } />
            } )
        }
    </ul>
)

export default URLList
