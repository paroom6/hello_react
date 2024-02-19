
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//App은 default 값을 가져오고 {App}은 함수명이 같은 것을 가져온다
import Hello from './Hello';
import './App.css';
//import {App, App2} from './App';//App은 default 값을 가져오고 {App}은 함수명이 같은 것을 가져온다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//strictMode - 디버깅모드 오류를 한번더 체크
  <React.StrictMode>
    <App />
    <Hello />
  </React.StrictMode>
);//reactDOM 객체에 사용
//열고 닫아도 되고 <App /> 형식도 된다 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//