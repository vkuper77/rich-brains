import {instance} from "./instance"
import {KeysLocalStorage} from "../costansts/keys-local-storage"
import {AddClientParams, EditClientParams, SignInParams} from "../models/responce/responce"

export class AuthApi {
	static async signIn({login, password}: SignInParams) {
		const response = await instance.post(`user/login`, {login, password})
		instance.setTokenToLocalStorage(response.token)
		localStorage.setItem(KeysLocalStorage.USER, JSON.stringify({login, password}))
		return response
	}

	static signOut() {
		instance.removeTokenFromLocalStorage()
		localStorage.removeItem(KeysLocalStorage.USER)
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

	static async deleteClient({id}: { id: string }) {
		return await instance.delete(`clients/remove?id=${id}`)
	}
}
