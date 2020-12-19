import { ValidationError } from 'class-validator'
export class GeneralError extends Error {
    constructor(message) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }

    getCode() {
        if (this instanceof BadRequest) {
            return 400
        }
        if (this instanceof NotFound) {
            return 404
        }

        return 500
    }
}

export class BadRequest extends GeneralError {}
export class NotFound extends GeneralError {}
export class ValidateError extends BadRequest {
    validate: any 
    constructor(validateData: ValidationError[]) {
        super('validate error')
        this.validate = validateData.map(item => ({ field: item.property, error: item.constraints }))
    }
}
