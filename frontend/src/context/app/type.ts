export interface AppContextValue {
    signIn(): Promise<void>
    signOut(): Promise<void>
    deleteClient(): Promise<void>
}
