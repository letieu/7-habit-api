import { Document } from 'mongoose'
import { Id, Mongo, Time } from './base.type'

// IUser need because have checkPass method 
export interface IUser extends Document{
  username: string,
  email   : string
  image   : string
  password: string
  _id     : Id
  createAt: Time
  updateAt: Time

  checkPass?: (password: string) => Promise<Boolean>
}

export type ResUser = {
  username: string
  email   : string
  image   : string
} & Mongo

export type ResAuth = ResUser & { token: string }


