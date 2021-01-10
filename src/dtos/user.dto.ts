import {plainToClass} from 'class-transformer'
import { IsDefined, IsNotEmpty, Min, validate } from 'class-validator'

export class RegisterDTO {
    @IsNotEmpty()
    @IsDefined()
    email: string

    @IsNotEmpty()
    @IsDefined()
    username: string

    @IsNotEmpty()
    @IsDefined()
    password: string
}

export class LoginDTO {
    @IsNotEmpty()
    @IsDefined()
    email: string

    @IsNotEmpty()
    @IsDefined()
    password: string
}
