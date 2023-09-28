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