import React, { Component } from 'react'
//import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

const TESTE = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1589&q=80", 
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80", 
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", 
    "https://images.unsplash.com/photo-1528017486352-b49206ec821b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", 
    "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", 
    "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
]

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

    loadSlider = () => {
        return TESTE.map((x, i) => {
            return <li key={i}><img src={x} alt={i} style={{borderRadius: 0}}/></li>
        })
    }

    render(){
        //Slider Settings
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <span />,
            prevArrow: <span />,
        }
        return(
            <div className="screen">
                <Slider {...settings} className="slider">
                    {this.loadSlider()}
                </Slider>
            </div>
        )
    }
}

export default Home