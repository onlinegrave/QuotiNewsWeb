import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { store } from './store';
import AppRouter from './navigation/_routes';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

const firebaseConfig = {
  apiKey: "AIzaSyApq02EYpr7xL3TNiv00ErILI54Z2iERYU",
  authDomain: "quotinews.firebaseapp.com",
  projectId: "quotinews",
  storageBucket: "quotinews.appspot.com",
  messagingSenderId: "474943970168",
  appId: "1:474943970168:web:5f0ee3d55681147cd4c68d",
  measurementId: "G-WGGXPMZGF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={navigator.language}>
        <AppRouter />
      </IntlProvider>
    </Provider>
  </React.StrictMode >
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
