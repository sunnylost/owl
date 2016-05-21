import React from 'react'

class URLItem extends React.Component {
    render() {
        let props         = this.props,
            displayDetail = props.displayDetail,
            { id, isActive, type, url } = props.data,
            className     = 'url item ' + ( isActive ? 'active' : '' )

        return <li className={ className } onClick={ e => displayDetail( id ) }>
            <i className={ 'c-icon c-icon-' + type } title={ type } data-type={ type }></i>
            <span className="url val">{ url }</span>
        </li>
    }
}

export default URLItem
