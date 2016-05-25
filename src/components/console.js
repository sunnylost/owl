import React from 'react'

const CUR = 'cur'

class Console extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind( this )
        this.handleFocus  = this.handleFocus.bind( this )
        this.state        = {
            commands: [ {
                isCur: true
            } ]
        }
    }

    handleFocus( e ) {
        e.target.classList.add( CUR )
    }

    handleChange( e ) {
        let el       = e.target,
            commands = this.state.commands

        if ( e.keyCode == 13 ) {
            el.classList.remove( CUR )
            commands[ commands.length - 1 ].isCur = false
            commands.push( {
                isCur: true
            } )
            this.setState( {
                commands
            } )
            setTimeout( () => {
                this.refs.list.lastChild.focus()
            }, 0 )
        }
    }

    render() {
        return <div className="console">
            <ul className="list" ref="list">
                { this.state.commands.map( ( command, index ) => {
                    return <li
                        key={ index }
                        className={ command.isCur ? 'line cur' : 'line' }
                        contentEditable={ true }
                        onKeyUp={ this.handleChange }
                    >{ command.value }</li>
                } ) }
            </ul>
        </div>
    }
}

export default Console
