import logo from './logo.svg';
import './App.css';
import ClassCompo from './components/ClassComponent';
import FunctionComponent  from './components/FunctionComponent';
import { useState } from 'react';
import './components/Style.css';


function App() {
  const [name1, setName1] = useState(false)
  const [name2,setName2]= useState(false)


  return (
    <div className="App">
      <>
        <h1 className='heading'>Using Functional and Class Component</h1>
        <br></br>
        <div>
          <button className='button1'
            onClick={() => { name1 ? setName1(false) : setName1(true) }}>To see styling in Functional component</button>
          {name1 && <FunctionComponent></FunctionComponent>}
        </div>
        <br></br>
        <div>
          <button className='button2' onClick={() => { name2 ? setName2(false) : setName2(true) }}>To see styling in class component</button>
          {name2 && <ClassCompo />}
        </div>
      </>

    </div>
  );
}

export default App;
