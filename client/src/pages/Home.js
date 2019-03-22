import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    /*
    componentDidMount(){
        axios.fetch(URL)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    products: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }*/

    render(){
        return(
            <div className="screen">
                <p>Screen</p>
            </div>
        )
    }
}

export default Home