import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from './routeNames';
import { Home, Login } from "../pages";
import { PrivateRoute } from "./PrivateRoute";


export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
      
      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_NAMES.HOME} element={<Home />} />
       
      </Route>
    </Routes>   
  )
}