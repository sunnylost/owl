import React from 'react'
import Searchbar from './searchbar'

const Operationbar = ( { isRunning, statusText, toggleServer } ) => (
    <div className="operate">
        <button data-action="start"
                className={ isRunning ? 'disabled' : 'prepare' }
                onClick={ () => toggleServer( true ) }>
            启动
        </button>
        <button data-action="stop"
                className={ isRunning ? '' : 'disabled' }
                onClick={ () => toggleServer( false ) }>
            停止
        </button>
        <button>清屏</button>
        <button>重置</button>
        <Searchbar placeholder="查找"/>
        <span className="status">{ statusText }</span>
    </div>
)

export default Operationbar
