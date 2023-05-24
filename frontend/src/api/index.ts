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

    static async addClient(data: AddClientParams) {
        return await instance.post(`clients/add`, {...data})
    }

    static async editClient(data: EditClientParams) {
        return await instance.put(`clients/edit`, {...data})
    }

    static async deleteClient({id}: { id: number }) {
        return await instance.delete(`clients/remove?id=${id}`)
    }
}

export type AddClientParams = {
    name: string,
    surname: string,
    age: number,
    phone: string,
    country: string
}

export type EditClientParams = {
    id: string,
    name: string,
    surname: string,
    age: number,
    phone: string,
    country: string
}
