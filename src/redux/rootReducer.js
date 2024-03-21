import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../pages/login/slices";
import productReducer from "../pages/products/slices";
import  productInfoSlice  from "../pages/productInfo/slices";

const rootReducer = {
    loginPage: loginReducer,
    productsPage: productReducer,
    productInfoPage: productInfoSlice,
};

export const store = configureStore({reducer: rootReducer});