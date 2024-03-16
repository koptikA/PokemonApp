import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { MyContext } from "../../customRedux/CustomRedux";



export const Header = () => {
    
    return (
        <div className="header">
            <Link className="header-link" to={"/"}>
                home page
            </Link>
            
 
        </div>
    );    
};        