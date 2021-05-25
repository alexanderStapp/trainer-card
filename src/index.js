import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from './context/UserContext'
import {HashRouter} from 'react-router-dom';
import {CardProvider} from './context/CardContext';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
