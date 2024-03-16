import React, { createContext, useReducer } from 'react'
import { initiaValues, reducer } from './reducer'

export const MyContext = createContext([initiaValues, reducer])

export const CustomRedux = ({ children }) => {
    const  [store, dispatch] = useReducer(reducer, initiaValues)
  return (
    <MyContext.Provider value={{store, dispatch}}>
        {children}
    </MyContext.Provider>
  )
}

export default CustomRedux