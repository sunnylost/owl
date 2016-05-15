import React from 'react'
import Searchbar from './searchbar'

const Infobar = ( { ip, port, isRunning, changePort } ) => (
    <div className="info">
        <label htmlFor="ip">IP:
            <span id="ip">{ ip }</span>
        </label>
        <label htmlFor="port">Port:
            <input id="port" type="text" type="number" min="80" max="99999" value={ port }
                   onChange={ e => changePort( e.target.value ) } disabled={ isRunning }/>
        </label>
        <label htmlFor="url-filter">
            Url Filter:
            <Searchbar />
            <button className="danger" title="清空 Url Filter">清空</button>
        </label>
    </div>
)

export default Infobar
