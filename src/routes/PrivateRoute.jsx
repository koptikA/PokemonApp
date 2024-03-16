import React, { useContext } from "react";
import { MyContext } from "../customRedux/CustomRedux";
import { loginSelector } from "../pages/login/selectors";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";



export const PrivateRoute = () => {
    const  {store } = useContext(MyContext)
    const { isAuth } = loginSelector(store)
    
    return isAuth ? (
        <> 
        
          <Outlet />
        </>
      ) : (
      <Navigate to={ROUTE_NAMES.LOGIN} />
  )
}