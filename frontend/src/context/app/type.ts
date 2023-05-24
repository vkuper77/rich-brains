import {AddClientParams, EditClientParams} from "../../api";

export interface AppContextValue {
    signIn(): Promise<void>
    signOut(): Promise<void>
    deleteClient(id: string): Promise<void>
    getClients(): Promise<void>
    addClient(p: AddClientParams): Promise<void>
    editClient(p: EditClientParams): Promise<void>
}
