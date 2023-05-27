export type SignInParams = {
    login: string,
    password: string
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
