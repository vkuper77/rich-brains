import {instance} from "./instance";

export class AuthApi {
    static async signIn({login, password}: { login: string, password: string }) {
        const response = await instance.post(`user/login`, {login, password})
        instance.setTokenToLocalStorage(response.token);
        return response
    }

    static signOut() {
        instance.removeTokenFromLocalStorage()
    }
}

export class AppApi {

    static async getClients() {
        return await instance.get(`clients`)
    }

    static async getClient({id}: { id: number }) {
        return await instance.post(`clients/get`, {id})
    }

    static async addClient({name, surname, age, phone}: { name: string, surname: string, age: number, phone: string }) {
        return await instance.post(`clients/add`, {name, surname, age, phone})
    }

    static async editClient({name, surname, age, phone, id}: { name: string, surname: string, age: number, phone: string, id: number }) {
        return await instance.put(`clients/edit`, {name, surname, age, phone, id})
    }

    static async deleteClient({id}: { id: number }) {
        return await instance.delete(`clients/remove?id=${id}`)
    }
}
