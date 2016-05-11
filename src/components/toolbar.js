import React from 'react'
import OperationbarContainer from '../container/operationbar'
import InfobarContainer from '../container/infobar'

class Toolbar extends React.Component {
    render() {
        return <div className="toolbar">
            <InfobarContainer/>
            <OperationbarContainer/>
        </div>
    }
}

export default Toolbar
