import React, { Component } from "react";
import {  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.scss';
import profilePic from '../assets/profilePic.jpg';

class HomePage extends Component{
    render() {
        return (
            <div className="HomePage-cont">
                <Banner img={profilePic} header="Hello, I'm Arthur" subheading="I'm a student, programmer and writer." text={["This is my site. Have a look around, this is where I document all my work, ideas and more!"]} alignment="text-lg-center" color="rgb(34 128 222)" backgroundImg="https://images.pexels.com/photos/932320/pexels-photo-932320.jpeg?cs=srgb&dl=closeup-photo-of-water-drop-932320.jpg&fm=jpg"/>
                <div className="container-fluid intro-cont h-100 w-100">
                    
                </div>
            </div>
        )
    }
};
function Banner(props){
    /* Banner takes in props and returns the HTML for a Banner
    Dimensions: xsm, sm md, lg, xlg
    Background img: props.img - should be the url
    props.header = the main header
    props.subheader
    props.text = list of text - limitless paragraphs (limit it to two practically though)
    props.button = button/call of action at the bottom.
    props.text-align = l,r or c 
    props.background_img = true (then put as background_img else put as profile pic)

    */
   const wrapper = {
       color: props.color || "",
       padding: "20vh",
       backgroundImage: `url(${props.backgroundImg})`
   }
    return(
        <div className="container-fluid intro-cont" style={wrapper}>
            {props.header && 
            <h1 class={props.alignment || "text-center"}>{props.header}</h1>
            }
            {props.subheading && 
            <h3 class={props.alignment || "text-center"}>{props.subheading}</h3>
            }
            {props.text && 
             props.text.map((text)=><p key={text} className={props.alignment || "text-center"}>{text}</p>)
            }
        </div>
    )
}
export default HomePage;
