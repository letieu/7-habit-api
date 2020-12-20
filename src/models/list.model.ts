import { Schema, model, Document } from 'mongoose'
import { ICategory } from './category.model'

export const listSchema = new Schema({
    name: {
        type: String,
        requred: true,
        default: 'list'
    },
    color: {
        type: String,
        enum: ['red', 'green', 'yellow', 'blue'],
        default: 'green'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        requred: true
    }
})

export interface IList extends Document {
    name: string
    color: string
    category: ICategory
}

export const List = model<IList>('List', listSchema)
