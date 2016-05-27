import React from 'react'

class URLItem extends React.Component {
    render() {
        let props         = this.props,
            displayDetail = props.displayDetail,
            { id, isActive, domain, type, url, path, general } = props.data,
            className     = 'url js-col item ' + ( isActive ? 'active' : '' )

        return <div className={ className } onClick={ e => displayDetail( id ) }>
            <div className="piece">
                <i className={ 'c-icon c-icon-' + type } title={ type } data-type={ type }></i>
            </div>
            <div className="piece">{ path }</div>
            <div className="piece">{ general.status }</div>
            <div className="piece">{ general.method }</div>
            <div className="piece">{ domain }</div>
            <div className="piece">{ type }</div>
        </div>
    }
}

export default URLItem
