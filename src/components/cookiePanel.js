import React from 'react'


class Cookie extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log( this.props )
        return <div className="panel">
        </div>
    }
}

export default Cookie
