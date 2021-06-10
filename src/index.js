import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from './context/UserContext'
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {CardProvider} from './context/CardContext';
import {BuddyProvider} from './context/BuddyContext';
import {TradeProvider} from './context/TradeContext'
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <TradeProvider>
          <BuddyProvider>
            <CardProvider>
              <App />
            </CardProvider>
          </BuddyProvider>
        </TradeProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
