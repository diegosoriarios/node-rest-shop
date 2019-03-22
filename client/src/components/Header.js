import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faTimes)

class Header extends Component {
    state = {
        search: '',
        searching: false
    }

    handleSearch = e => {
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return(
            <div className="header">
                <div className="searchIcon" onClick={() => this.setState({searching: !this.state.searching})}><FontAwesomeIcon icon={this.state.searching ? "times" : "search"} /></div>
                <input className={this.state.searching ? 'searchingStyle' : 'notSearchingStyle' } type="text" value={this.state.search} onChange={e => this.handleSearch(e)} autoFocus />
                <p className={this.state.searching ? 'textStyle' : 'notTextStyle'}>{this.props.location}</p>
            </div>
        )
    }
}

export default Header