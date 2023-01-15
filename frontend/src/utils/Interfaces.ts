export interface RandomUser {
    name: {
        first: string
        last: string
    }

    login: {
        username: string
        uuid: string
    }

    dob: {
        age: number
    }

    email: string

    picture: {
        large: string
    }
}

export interface Client {
    name: string
    cpf: string
    email: string
    phone: number
    address: string
    city: string
    _id: Object
}