import {AddClientParams, EditClientParams, SignInParams} from "../../api";

export interface AppContextValue {
    signIn(p: SignInParams): Promise<void>
    signOut(): Promise<void>
    deleteClient(id: string): Promise<void>
    getClients(): Promise<void>
    addClient(p: AddClientParams): Promise<void>
    editClient(p: EditClientParams): Promise<void>
}
