import { IsNotEmpty } from 'class-validator'

export class RegisterDTO {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    confirm: string
}

export class LoginDTO {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string
}

export class RefreshDTO {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    refresh_token: string
}
