import React from 'react'

class Searchbar extends React.Component {
    constructor() {
        super()
        this.search = this.search.bind( this )
        this.state  = {
            prevSearch: ''
        }
    }

    search( e ) {
        let target = e.target,
            val    = target.value.trim(),
            prev   = this.state.prevSearch

        if ( prev != val ) {
            this.props.search( val )
            this.setState( {
                prevSearch: val
            } )
        }
    }

    render() {
        return <input type="text"
                      className="search-bar"
                      placeholder={this.props.placeholder}
                      onChange={ e => this.search( e ) }
        />
    }
}

export default Searchbar
