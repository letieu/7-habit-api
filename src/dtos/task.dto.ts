import { IsNotEmpty, IsDefined } from 'class-validator'

export class CreateTaskDTO {
    @IsNotEmpty()
    @IsDefined()
    title: string

    @IsNotEmpty()
    @IsDefined()
    description: string
    
    @IsNotEmpty()
    @IsDefined()
    list: string
    
    color: string

}

export class UpdateTaskDTO {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    description: string
    
    @IsNotEmpty()
    list: string
    
    color: string

}
