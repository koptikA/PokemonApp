import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from './routeNames';
import { Login, Products  } from "../pages";
import { PrivateRoute } from "./PrivateRoute";



export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
      
      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_NAMES.HOME} element={<Navigate to={ROUTE_NAMES.PRODUCTS} />} />
        <Route path={ROUTE_NAMES.PRODUCTS} element={<Products/>} />
       
      </Route>
    </Routes>   
  )
}