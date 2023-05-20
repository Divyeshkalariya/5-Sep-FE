import React,{Component} from "react";
export default class Enjoy extends Component
{
    render()
    {
        return(
            <>
            <div className="mt-5 text-center">
                <h1>Hellow, I Am Divyesh</h1>
                <h3>I am <span style={{color:"orange"}}>{this.props.age}</span> years old.</h3>
                <h3>I am <span style={{color:"orangered"}}>{this.props.role}</span></h3>
                <p>Used class components</p>
                <hr/>
            </div>
            </>
        )
    }
}