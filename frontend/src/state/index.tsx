import React from 'react';
import {Action, State, StoreActions} from "./types";
import {produce} from "immer";

export const initialState: State = {
    isAuthenticated: false,
    clients: [],
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case StoreActions.LOGIN:
            return produce(state, (draft) => {
                draft.isAuthenticated = true
            })
        case StoreActions.LOGOUT:
            return produce(state, (draft) => {
                draft.isAuthenticated = false
            })
        case StoreActions.SET_CLIENTS:
            return produce(state, (draft) => {
                draft.clients = action.payload
            })
        default:
            return state;
    }
};

