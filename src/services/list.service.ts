import { Service } from "./base.service";
import { Model } from 'mongoose'
import { List, IList } from '../models/list.model'
import { Category, ICategory } from '../models/category.model'
import {CreateListDTO, UpdateListDTO} from "../dtos/list.dto";
import {BadRequest} from "../utils/error";

export class ListService extends Service {
    categoryModel: Model<ICategory>
    constructor() {
        super(List)
        this.categoryModel = Category
    }

    async create(createListDto: CreateListDTO, categoryName, user_id): Promise<IList> {
        const category = await this.categoryModel.findOne({
            name: categoryName,
            users: user_id
        }).exec()

        if (!category) throw new BadRequest(`user not have category ${categoryName}`)
        const list = await new this.model({
            ...createListDto,
            category: category._id
        }).save()

        return list
    }

    async update(updateDto: UpdateListDTO, categoryName: string, user_id, id: string): Promise<IList> {
       const category = await this.categoryModel.findOne({
           name: categoryName,
           users: user_id
       }).exec() 

       if (!category) throw new BadRequest(`user not have category ${categoryName}`)
       const list = await this.model.findOneAndUpdate({_id: id}, updateDto, {new: true})
       return list
    }

    async findAll(categoryName: string, user: any): Promise<IList[]> {
        const category = await this.categoryModel.findOne({ name: categoryName, users: user.id })
        const lists = await this.model.find({
            category: category._id
        })
        return lists
    }

    async remove(id: string) {
        return this.model.deleteOne({_id: id})
    }
}
