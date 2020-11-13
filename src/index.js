import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Main/App';
import Route from './Router'
import reportWebVitals from './reportWebVitals'; // 缓存
import VConsole from 'vconsole'
new VConsole() // 调用调试浮窗
ReactDOM.render(
  <React.StrictMode>
    {Route}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
