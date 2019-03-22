import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import WishList from './pages/WishList'
import Header from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faSearch, faShoppingCart, faUser, faHeart)

class App extends Component {
    render(){
        return(
            <Router>
                <div className="App">
                  <Header />
                  <Route path="/" exact component={Home} />
                  <Route path="/catalog/" component={Catalog} />
                  <Route path="/cart/" component={Cart} />
                  <Route path="/like/" component={WishList} />
                  <Route path="/profile/" component={Profile} />
                  <nav>
                    <ul className="navBar">
                        <li>
                            <Link to="/"><FontAwesomeIcon icon="home" /></Link>
                        </li>
                        <li>
                            <Link to="/catalog/"><FontAwesomeIcon icon="search" /></Link>
                        </li>
                        <li>
                            <Link to="/cart/"><FontAwesomeIcon icon="shopping-cart" /></Link>
                        </li>
                        <li>
                            <Link to="/like/"><FontAwesomeIcon icon="heart" /></Link>
                        </li>
                        <li>
                            <Link to="/profile/"><FontAwesomeIcon icon="user" /></Link>
                        </li>
                    </ul>
                  </nav>
                </div>
            </Router>
        )
    }
}

export default App