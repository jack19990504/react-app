import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App2 = () =>{
  return(
    <div>
      <label class = "lable" for = "name">
        Enter Name:
      </label>
      <input id = "name" type = "text"/>
      <button style = {{backgroundColor : 'green',color : 'white'}}>Submit</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
