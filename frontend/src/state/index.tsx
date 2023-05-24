import React from 'react';
import {Action, State, StoreActions} from "./types";
import {produce} from "immer";

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    clients: [],
};

export const reducer = (state: State, {type, payload}: Action): State => {
    switch (type) {
        case StoreActions.LOGIN:
            return produce(state, (draft) => {
                draft.isAuthenticated = true
                draft.user = payload
            })
        case StoreActions.LOGOUT:
            return produce(state, (draft) => {
                draft.isAuthenticated = false
                draft.user = null
            })
        case StoreActions.SET_CLIENTS:
            return produce(state, (draft) => {
                draft.clients = payload
            })
        case StoreActions.ADD_CLIENT:
            return produce(state, (draft) => {
                draft.clients.push(payload)
            })
        case StoreActions.EDIT_CLIENT:
            return produce(state, (draft) => {
                draft.clients = draft.clients.map(client => client.id === payload.id ? payload : client)
            })
        case StoreActions.DELETE_CLIENT:
            return produce(state, (draft) => {
                draft.clients = draft.clients.filter(client => client.id !== payload.id)
            })
        default:
            return state;
    }
};
