import { IsNotEmpty, IsDefined } from 'class-validator'

export class CreateListDTO {
    @IsNotEmpty()
    @IsDefined()
    name: string
    
    color: string
}
