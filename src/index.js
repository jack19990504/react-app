import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Location extends React.Component{

  // belongs to javascript
  // initialize state
  // state can only changed with setState()
  
  constructor(props){
    // must do
    // overriding React Component constructor
    super(props)

    // initialize state
    // ONLY ACCETABLE FOR initialize 
    this.state = { 
      Latitude : null,
      errorMessage : ''
    };
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
        console.log(123);
        // use setState to assign value
        // ** NEVER use (this.state.Latitude = position.coords.latitude) **

        this.setState({Latitude : position.coords.latitude})
      },
      error => {
        this.setState({ errorMessage : error.message })
      }
    ); 
  }

  
  // class component must define render!
  // must return some JSX!
  render(){
    if(this.state.errorMessage && !this.state.Latitude){
      return<div>
        Error : { this.state.errorMessage }
      </div>
    }

    if(!this.state.errorMessage && this.state.Latitude){
      return<div>
        Latitude : { this.state.Latitude }<br/>
      </div>
    }
    
    return <div>loading</div>
  };
}

ReactDOM.render(
  <React.StrictMode>
    <Location /> 
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
