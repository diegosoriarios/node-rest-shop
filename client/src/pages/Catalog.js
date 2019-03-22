import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../actions/check'

class Catalog extends Component {
    render(){
        return(
            <div className="screen">
                <p>Catalog</p>
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
        removeItem: (url) => dispatch(removeItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)