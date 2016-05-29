import React from 'react'

const Operationbar = ( { isRunning, statusText, toggleServer, clear } ) => (
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
        <button onClick={ clear }>清屏</button>
        <button>重置</button>
        <span className="status">{ statusText }</span>
    </div>
)

export default Operationbar
