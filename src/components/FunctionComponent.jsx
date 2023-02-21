import React from 'react';
import './Style.css';

const FunctionalComponent = () => {
    return (
        <div className='box1'>
            <h2 className='FunctionText'>This is created using Functional Component</h2>
            <br></br>
            
            <p style={{color:'blue', fontWeight:'bold',textAlign:'center'}}>This is done using Inline CSS</p>
            <br></br>
             <h3 className="ext">using external css</h3>
        </div>
    )
}
export default FunctionalComponent;
