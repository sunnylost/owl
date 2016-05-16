import React from 'react'

class URLItem extends React.Component {
    render() {
        return <li className="url item">
            { this.props.url }
        </li>
    }
}

export default URLItem
