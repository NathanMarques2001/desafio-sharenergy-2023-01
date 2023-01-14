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