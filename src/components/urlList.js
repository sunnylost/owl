import React from 'react'
import URLItem from './urlItem'

const URLList = ( data ) => (
    <ul className="list">
        {
            data.urls.map( ( data, i ) => {
                return <URLItem key={ i } { ...data }/>
            } )
        }
    </ul>
)

export default URLList
