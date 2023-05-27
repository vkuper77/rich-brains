import React, {useReducer} from "react";
import {initialState, reducer} from "../../state";
import { StateContext } from "./context";
import {StateProviderProps} from "../../models/context/state-context";

function StateProvider ({ children }: StateProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider
