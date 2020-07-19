//setup data layer - for checkout and tracks user
//utilize as template for other projects

import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
