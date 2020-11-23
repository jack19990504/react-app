import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class Location extends React.Component{

  // belongs to javascript
  // initialize state
  // state can only changed with setState()


  state = { Latitude : null, errorMessage : ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({Latitude : position.coords.latitude}),
      error => this.setState({ errorMessage : error.message })
    ); 
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.Latitude){
      return<div>
        Error : { this.state.errorMessage }
      </div>
    }

    if(!this.state.errorMessage && this.state.Latitude){
      return <SeasonDisplay latitude = {this.state.Latitude }/>
    }
    
    return <div><Spinner message = "請接受位置請求"/></div>
  }
  
  // class component must define render!
  // must return some JSX!
  render(){
    return(
      <div className = "border-red">
        {this.renderContent()}
      </div>
    )
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
