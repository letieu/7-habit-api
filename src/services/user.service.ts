import { RegisterDTO } from '../dtos/user.dto'
import { User } from '../models/user.model'
import { BadRequest } from '../core/error'
import * as bcrypt from 'bcrypt'
import {IUser, ResUser} from '../types/user.type'

export class UsersService {
    public model = User

    async findAll(): Promise<IUser[]> {
        const users = await this.model.find().exec()
        return users
    }
    async findUsername(username: string): Promise<ResUser> {
        return await this.model.findOne({ username }).exec()
    }
    async create(userDto: RegisterDTO): Promise<IUser> {
        const user = await this.model.findOne({ username: userDto.username })
        if (user)
            throw new BadRequest('username has already')

        userDto.password = await bcrypt.hash(userDto.password, 10)
        const newUser = await new this.model(userDto).save()
        return newUser
    }
    async delete(id: string): Promise<any> {
        return await this.model.deleteOne({ id })
    }
}

export const usersService = new UsersService()
