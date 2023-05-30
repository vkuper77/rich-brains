import {KeysLocalStorage} from "../costansts/keys-local-storage"

export function getUserFromLocalStorage(): { login: string } | null {
    const storedUser = localStorage.getItem(KeysLocalStorage.USER)
    if (storedUser) {
        return JSON.parse(storedUser)
    }
    return null
}
