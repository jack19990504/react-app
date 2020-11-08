import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentDeatil from './CommentDeail';
import ApprovalCard from './ApprovalCard'; 
import faker from 'faker';


const App2 = () =>{

  return(
    <div className = "ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do it?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDeatil author = 'Jack' timeAgo ='Today at 6:00PM' content='Nice work!' avatar ={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDeatil author = 'Betty' timeAgo ='Today at 4:45PM' content='great Job!' avatar ={faker.image.avatar()}/>  
      </ApprovalCard>
      <ApprovalCard>
        <CommentDeatil author = 'Morris' timeAgo ='Today at 3:00PM' content='STFU!' avatar ={faker.image.avatar()}/>
      </ApprovalCard>
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
