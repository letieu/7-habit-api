import {GeneralError} from "../core/error"
import {CreatePrincipleDTO, UpdatePrincipleDTO} from "../dtos/principle.dto"
import { Principle } from "../models/principle.model"
import {Id} from "../types/base.type"
import { IPrinciple } from "../types/principle.type"
import {IUser} from "../types/user.type"
import { Service } from "./base.service"

export class PrincipleService extends Service 
{
  public async create (principleDto: CreatePrincipleDTO, user: IUser): Promise<IPrinciple> 
  {
    const principle = new this.model({
      ...principleDto,
      user: user.id
    })

    return await principle.save()
  }

  public async findByUser(user: IUser): Promise<IPrinciple[]> 
  {
    return await this.model.find({ user: user.id }) 
  }

  public async update(principleDto: UpdatePrincipleDTO, _id: Id, user: IUser): Promise<IPrinciple> 
  {
    const principle = await this.model.findOne({ _id })
    if (principle.user != user.id) {
      throw new GeneralError('user dont have this principle') 
    }

    await principle.updateOne(principleDto)
    return await this.model.findOne({ _id })   
  }

  public async delete(_id: Id, user: IUser): Promise<any> 
  {
    const principle = await this.model.findOne({ _id, user: user.id })
    if (!principle) {
      throw new GeneralError('user dont have this principle') 
    }
    principle.delete()

    return principle
  }
}

export const principleService = new PrincipleService(Principle)

