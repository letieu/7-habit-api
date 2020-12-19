import { Schema, model, Document } from 'mongoose'
import * as bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
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

export interface IUser extends Document{
    username: string,
    password: string,
    checkPass: (password: string) => Promise<Boolean>
}

export const User = model<IUser>('User', userSchema)
