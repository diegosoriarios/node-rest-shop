import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../actions/check'

class Cart extends Component {
    render(){
        if(this.props.items && this.props.items.lenght == 0){
            return(
                <div className="screen">
                    <p>Vazio</p>
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