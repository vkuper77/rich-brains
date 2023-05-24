export type Action = { type: string, payload?: any }

export interface State {
    isAuthenticated: boolean;
    user: { login: string } | null
    clients: Client[];
}

export enum StoreActions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    SET_CLIENTS = 'SET_CLIENTS',
}

export type Client = {
    age: string,
    country: string,
    id: string,
    phone: string,
    surname: string
    name: string
}
