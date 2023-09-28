export interface LoginPost {
    email: string,
    password: string
}

export interface LoginResponse {
    uuid: string
    name: string
    email: string
    access_token: string
}

export interface SigninPost {
    name: string
    email: string,
    password: string
}

export interface signinResponse {
    email: string
    name: string
    password: string
    uuid: string
    isActive: boolean
}

export interface CreatePost {
    title: string
    message: string
    author: string
}

export interface CreateResponse { 
    title: string
    message: string
    author: string
    creationDate: number
    id: number
}

export interface RenewPost { 
    email : string
}