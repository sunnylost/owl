import React from 'react'

class Searchbar extends React.Component {
    render() {
        return <input type="text" className="search-bar" placeholder={this.props.placeholder}/>
    }
}

export default Searchbar
