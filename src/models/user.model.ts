import { Schema, model, Document } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { IUser } from '../types/user.type'

const userSchema = new Schema(
    {
        email: {
          type: String,
          required: true
        },
        image: {
          type: String
        },
        username: {
            type: String,
            requred: true
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password
    return obj;
}
userSchema.methods.checkPass = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

export const User = model<IUser>('User', userSchema)
