import { IsNotEmpty, IsDefined } from 'class-validator'

export class CreateCategoryDTO {
    @IsNotEmpty()
    @IsDefined()
    name: string
    
    icon: string

    @IsDefined()
    @IsNotEmpty()
    user_id: string
}
