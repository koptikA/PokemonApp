import { Router } from "./routes/Router";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { store } from "./redux/rootReducer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
                <Provider store={store}>
                      
                                <App>
                                        <Router/>
                                </App>              

                       
                </Provider>
                 
  
        </BrowserRouter>    

);