import { Document, Model } from 'mongoose'

export abstract class Service {
    public model: Model<any>

    public constructor(model: Model<any>) {
        this.model = model
    }

    async create(dto: any, ...args): Promise<Document> {
        const newRow = await new this.model(dto).save() 
        return newRow
    }

    async delete(id: string, ...args): Promise<any> {
        return await this.model.deleteOne({ id })
    }

    async findAll(...args): Promise<Document[]> {
        return await this.model.find({})
    }

    async update(dto: any, ...args): Promise<Document> {
        return await this.model.update(dto)
    }
}
