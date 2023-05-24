import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './app/styles/index.scss'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./app/appStore";
import "primereact/resources/primereact.min.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./app/styles/index.scss"
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>

            <App/>
        </BrowserRouter>

    </Provider>
)
