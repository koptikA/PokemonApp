import { CustomRedux } from "./customRedux/CustomRedux";
import { Router } from "./routes/Router";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
                <CustomRedux>
                        <App>
                                <Router/>
                        </App>              

                </CustomRedux>   
  
        </BrowserRouter>    

);