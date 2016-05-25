import React from 'react'

const CUR = 'cur'

class Console extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind( this )
        this.handleFocus  = this.handleFocus.bind( this )
    }

    handleFocus( e ) {
        e.target.classList.add( CUR )
    }

    handleChange( e ) {
        let el    = e.target,
            value = el.value.trim()

        if ( e.keyCode == 13 && value ) {
            el.value = ''
            this.props.execute( value )
        }
    }

    render() {
        return <div className="console">
            <ul className="list" ref="list">
                { this.props.history.map( ( command, index ) => {
                    return <li
                        key={ index }
                        className="line"
                    >{ command.value }</li>
                } ) }
            </ul>
            <input type="text" className="input" placeholder="input command to execute" onKeyUp={ this.handleChange }/>
        </div>
    }
}

export default Console
