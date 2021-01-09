import {ITask, Task} from '../models/task.model'
import { Service } from './base.service'
import { CreateTaskDTO, UpdateTaskDTO } from '../dtos/task.dto'

export class TaskService extends Service {
    constructor() {
        super(Task)
    }

    async create(createTaskDTO: CreateTaskDTO): Promise<ITask> {
        const task = await new this.model(createTaskDTO)
        return await task.save()
    }

    async update(updateDto: UpdateTaskDTO, id: string): Promise<ITask> {
        const t = await this.model.findOne({_id: id})
        console.log(t)
        const task = await this.model.findOneAndUpdate({ _id: id }, updateDto, { new: true }) 
        return task
    }

    async remove(id: string): Promise<boolean> {
        return await this.model.deleteOne({ _id: id })
    }

    async getByListId(listId: string): Promise<ITask[]> {
        return await this.model.find({ list: listId }).sort('color')
    }
}
