import {useState} from 'react';
import Appst from './Appst.css';

function App(){
  let [count,setCount] = useState(0);
  function addition() {
    setCount(count+1);
    console.log(count);
  }

  function subtraction() {
    setCount(count-1);
    console.log(count);
  }
  return (
    <>
      <div className="app">
        <div className="box">
          <p className='val'>Value: {count}</p>
          <button className='btn1' onClick={addition}>Add</button>
          <button className='btn2' onClick={subtraction}>Sub</button>
        </div>
      </div>
    </>
  );
}

export default App;