import { Component } from 'react';
import './Style.css'


export default class ClassCompo extends Component{
    render() {
        return (
               
            <div className='box2'>
                <h3 className='text'>
                    This is created using classComponent
                </h3>
                <br></br>
                <p style={{color:'blue', fontWeight:'bold',textAlign:'center'}}>This is done using Inline CSS</p>
       <br>
                </br>
                <h3 className="ext">using external css</h3>
            </div>
        )
    }
}