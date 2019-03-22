import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../actions/check'
import { initialState } from '../reducers/check'
import '../App.css'

class Cart extends Component {
    render(){
        if(initialState.items && initialState.items.length == 0){
            return(
                <div className="screen">
                    <div className="vazio">
                        <div className="wrapper"></div>
                        <p>vazio</p>
                    </div>
                </div>
            );
        }
        return(
            <div className="screen">
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)