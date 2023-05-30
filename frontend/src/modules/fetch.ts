import {KeysLocalStorage} from "../costansts/keys-local-storage"

export class FetchConstructor {
    private readonly baseUrl: string;

    constructor(url: string) {
    	this.baseUrl = url
    }

    async get(route: string): Promise<any> {
    	const url = this.baseUrl + route
    	const response = await fetch(url, {
    		method: 'GET',
    		headers: this.getHeaders(),
    	})
    	return this.handleResponse(response)
    }

    async post(route: string, body: any): Promise<any> {
    	const url = this.baseUrl + route
    	const response = await fetch(url, {
    		method: 'POST',
    		headers: this.getHeaders(),
    		body: JSON.stringify(body),
    	})
    	return this.handleResponse(response)
    }

    async put(route: string, body: any): Promise<any> {
    	const url = this.baseUrl + route
    	const response = await fetch(url, {
    		method: 'PUT',
    		headers: this.getHeaders(),
    		body: JSON.stringify(body),
    	})
    	return this.handleResponse(response)
    }

    async delete(route: string): Promise<any> {
    	const url = this.baseUrl + route
    	const response = await fetch(url, {
    		method: 'DELETE',
    		headers: this.getHeaders(),
    	})
    	return this.handleResponse(response)
    }

    private getHeaders(): Record<string, string> {
    	const headers: Record<string, string> = {
    		'Content-Type': 'application/json',
    	}
    	const token = this.getTokenFromLocalStorage()
    	if (token) {
    		headers['Authorization'] = `${token}`
    	}
    	return headers
    }

    private getTokenFromLocalStorage(): string | null {
    	return localStorage.getItem(KeysLocalStorage.TOKEN)
    }

    setTokenToLocalStorage(token: string): void {
    	localStorage.setItem(KeysLocalStorage.TOKEN, token)
    }

    removeTokenFromLocalStorage(): void {
    	localStorage.removeItem(KeysLocalStorage.TOKEN)
    }

    private async handleResponse(response: Response): Promise<any> {
    	if (!response.ok) {
    		throw new Error('Request failed')
    	}
    	return response.json()
    }
}

