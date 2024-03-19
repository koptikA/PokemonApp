import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ROUTE_NAMES } from "../../routes/routeNames";
import { Button } from "react-bootstrap";
import { logoutAction } from "../../pages/login/actions";
import { useDispatch } from "react-redux";



export const Header = () => {
    const dispatch = useDispatch()
      
    return (
        <div className="header">
            <Link className="header-link" to={ROUTE_NAMES.PRODUCTS}>
                products
            </Link>
            
            <Button variant={"danger"} onClick={() => dispatch(logoutAction())}>
                Выйти
            </Button>        
 
        </div>
    );    
};        