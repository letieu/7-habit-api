import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { ValidateError } from '../utils/error'

export async function validateDTO(DTO, data): Promise<any> {
    const dto = plainToClass(DTO, data) 
    const error = await validate(dto, { skipMissingProperties: true })
    if (error && error.length) {
        throw new ValidateError(error)
    }

    return dto
}
