import React, { Component } from 'react'
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: "Open Sans", sans-serif;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  h2 {
    color: #0d47a1;
  }
  p {
    font-size: 1rem;
    max-width: 400px;
    margin: 20px auto;
    color: #37474f;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #4776e6;
    border-radius: 5px;
    background-image: linear-gradient(
      to right,
      #4776e6 0%,
      #8e54e9 51%,
      #4776e6 100%
    );
  }

  img {
    border-radius: 50%;
  }
`;

const Styled = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;

function HomePage() {
  return (
    <Styled>
      <Home />
    </Styled>
  );
}

function CatalogPage() {
  return (
    <Styled>
      <Catalog />
    </Styled>
  );
}

function CartPage() {
  return (
    <Styled>
      <Cart />
    </Styled>
  );
}

function WishListPage() {
  return (
    <Styled>
      <WishList />
    </Styled>
  );
}

function ProfilePage() {
  return (
    <Styled>
      <Profile />
    </Styled>
  );
}

class App extends Component {
  state = {
    location: 'Home'
  }

  handleLocation = location => {
    this.setState({
      location
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header location={this.state.location}/>
          <Route render={({ location }) => {
            return (
              <PageContainer>
                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={300}
                    classNames="page"
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/catalog/" component={CatalogPage} />
                      <Route path="/cart/" component={CartPage} />
                      <Route path="/like/" component={WishListPage} />
                      <Route path="/profile/" component={ProfilePage} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </PageContainer>
            )
          }
          }
          />
          <nav>
            <ul className="navBar">
              <li onClick={() => this.handleLocation("Home")}>
                <Link to="/"><FontAwesomeIcon icon="home" /></Link>
              </li>
              <li onClick={() => this.handleLocation("Catalogo")}>
                <Link to="/catalog/"><FontAwesomeIcon icon="search" /></Link>
              </li>
              <li onClick={() => this.handleLocation("Meu carrinho")}>
                <Link to="/cart/"><FontAwesomeIcon icon="shopping-cart" /></Link>
              </li>
              <li onClick={() => this.handleLocation("Salvos")}>
                <Link to="/like/"><FontAwesomeIcon icon="heart" /></Link>
              </li>
              <li onClick={() => this.handleLocation("Perfil")}>
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