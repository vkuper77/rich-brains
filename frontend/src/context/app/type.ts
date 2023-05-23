export interface AppContextValue {
    signIn(): Promise<void>
    signOut(): Promise<void>
}
