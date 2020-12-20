import { RegisterDTO } from '../dtos/user.dto'
import { User, IUser } from '../models/user.model'
import {BadRequest} from '../utils/error'
import * as bcrypt from 'bcrypt'

export class UsersService {
    public model = User

    async findAll(): Promise<IUser[]> {
        const users = await this.model.find().exec()
        return users
    }
    async findUsername(username: string): Promise<IUser> {
        return await this.model.findOne({ username }).exec()
    }
    async create(userDto: RegisterDTO): Promise<any> {
        if (userDto.password != userDto.confirm)
            throw new BadRequest('confirm not match')

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
