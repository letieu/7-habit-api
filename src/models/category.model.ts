import { Schema, model, Document } from 'mongoose'
import { IList } from './list.model'
import {IUser} from './user.model'

export const categorySchema = new Schema({
    name: {
        type: String,
        requred: true,
        default: 'list'
    },
    icon: {
        type: String,
        default: 'user'
    },
    lists: [{
        type: Schema.Types.ObjectId,
        ref: 'List'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

export interface ICategory extends Document {
    name: string
    icon: string
    lists: IList[]
    users: IUser[]
}

export const Category = model<ICategory>('Category', categorySchema)
