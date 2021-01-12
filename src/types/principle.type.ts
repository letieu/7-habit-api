import { Document, Schema } from 'mongoose'

export interface IPrinciple extends Document {
  name: string
  detail: string
  user: string 
}
