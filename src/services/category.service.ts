import { Service } from "./base.service";
import {CreateCategoryDTO} from "../dtos/category.dto";
import { Category, ICategory } from '../models/category.model'

export class CategoryService extends Service{
    constructor() {
        super(Category)
    }

    async create(createCategoryDto: CreateCategoryDTO): Promise<ICategory> {
        const category = new this.model(createCategoryDto)        
        category.users.push(createCategoryDto.user_id)
        await category.save()
        return category
    }

    async findByUserID(id: string): Promise<ICategory[]> {
        const categories = await this.model.find({ users: id })
        return categories
    }

    async update(payload: CreateCategoryDTO, id: string): Promise<ICategory> {
        const category = await this.model.findByIdAndUpdate(id, payload, { new: true }).exec()
        return category
    }

    async remove(id: string, userId: string): Promise<boolean> {
        return await this.model.deleteOne({ _id: id,  users: { $elemMatch: { $eq: userId } } })
    }

}
