export type Action = { type: string, payload: any }

export interface State {
    isAuthenticated: boolean;
    clients: string[];
}

export enum StoreActions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    SET_CLIENTS = 'SET_CLIENTS',
}
