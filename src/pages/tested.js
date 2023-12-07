import React from "react";
import './testedStyle.css';

class tested extends React.Component{
    render(){
        return(
            <div class='post'>
                <p>meow</p>
          
            <button class='likebtn'><i id='like' class='fas fa-heart'/>Like</button>
            <button class='componentbtn'><i id='comment' class='fas fa-comment'/> Component</button>
           
            </div>
        )
    }
}
export default tested;