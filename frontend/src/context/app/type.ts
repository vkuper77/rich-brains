import {AddClientParams} from "../../api";

export interface AppContextValue {
    signIn(): Promise<void>
    signOut(): Promise<void>
    deleteClient(): Promise<void>
    getClients(): Promise<void>
    addClient(p: AddClientParams): Promise<void>
}
