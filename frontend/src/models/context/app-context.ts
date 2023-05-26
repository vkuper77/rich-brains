import {ReactNode} from "react";
import {AddClientParams, EditClientParams, SignInParams} from "../responce/responce";

export interface ProviderProps {
    children: ReactNode;
}

export interface AppContextValue {
    signIn(p: SignInParams): Promise<void>
    signOut(): Promise<void>
    deleteClient(id: string): Promise<void>
    getClients(): Promise<void>
    addClient(p: AddClientParams): Promise<void>
    editClient(p: EditClientParams): Promise<void>
}
