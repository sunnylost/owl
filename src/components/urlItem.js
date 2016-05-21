import React from 'react'

class URLItem extends React.Component {
    render() {
        let type = this.props.type

        return <li className="url item">
            <i className={ 'c-icon c-icon-' + type } title={ type } data-type={ type }></i>
            <span className="url val">{ this.props.url }</span>
        </li>
    }
}

export default URLItem
