import { model, Schema } from 'mongoose'
import {IPrinciple} from '../types/principle.type'

const principleSchema = new Schema({
  name: String,
  detail: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export const Principle = model<IPrinciple>('Principle', principleSchema)
