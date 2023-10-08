import {KeysLocalStorage} from "../costansts/keys-local-storage"

export function getUserFromLocalStorage(): {
    password: string, login: string
} | null {
    const storedUser = localStorage.getItem(KeysLocalStorage.USER)
    if (storedUser) {
        return JSON.parse(storedUser)
    }
    return null
}
