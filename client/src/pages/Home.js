import React, { Component } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        //Slider Settings
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return(
            <div className="screen">
                <Slider {...settings} className="slider">
                    <li>
                        <h3>1</h3>
                    </li>
                    <li>
                        <h3>2</h3>
                    </li>
                    <li>
                        <h3>3</h3>
                    </li>
                    <li>
                        <h3>4</h3>
                    </li>
                    <li>
                        <h3>5</h3>
                    </li>
                    <li>
                        <h3>6</h3>
                    </li>
                </Slider>
            </div>
        )
    }
}

export default Home