import React from 'react'
import Const from '../util/const'

const ACTIVE = 'active'

class URLFilter extends React.Component {
    constructor() {
        super()
        this.filter = this.filter.bind( this )
    }

    componentDidMount() {
        this._curActive = this.refs[ 0 ]
    }

    filter( e ) {
        let target = e.target

        if ( target !== this._curActive ) {
            this._curActive.classList.remove( ACTIVE )
            target.classList.add( ACTIVE )
            this._curActive = target

            this.props.filterURL( target.dataset.value )
        }
    }

    render() {
        return <ul className="filter">
            { Const.filter.map( ( { text, value }, i ) => {
                let className = `item ${ i == 0 ? ACTIVE : '' }`
                return <li
                    ref={ i }
                    className={ className }
                    key={ i }
                    data-value={ value }
                    onClick={ this.filter }>{ text }</li>
            } ) }
        </ul>
    }
}

export default URLFilter
