import { Schema, model, Document } from 'mongoose'

export const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        enum: ['red', 'green', 'yellow', 'blue'],
        default: 'green'
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: 'List',
        required: true
    }
})

export interface ITask extends Document {
    title: string
    description: string
    color: string
}

export const Task = model<ITask>('Task', taskSchema)
