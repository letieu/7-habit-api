import { Service } from "./base.service";
import { Model } from 'mongoose'
import { List, IList } from '../models/list.model'
import { Category, ICategory } from '../models/category.model'
import {CreateListDTO} from "../dtos/list.dto";
import {BadRequest} from "../utils/error";

export class ListService extends Service {
    categoryModel: Model<ICategory>
    constructor() {
        super(List)
        this.categoryModel = Category
    }

    async create(createListDto: CreateListDTO, category_id, user_id): Promise<IList> {
        const category = await this.categoryModel.findOne({
            _id: category_id,
            users: user_id
        }).exec()

        if (!category) throw new BadRequest(`user not have category ${category_id}`)
        const list = await new this.model({
            ...createListDto,
            category: category_id
        }).save()

        return list
    }

    async findAll(category_id): Promise<IList[]> {
        const lists = await this.model.find({
            category: category_id
        })
        return lists
    }
}
