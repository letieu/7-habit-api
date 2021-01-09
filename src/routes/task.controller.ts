import { Router } from 'express' 
import { CreateTaskDTO, UpdateTaskDTO } from '../dtos/task.dto'
import { authJwt } from '../middlewares'
import { validateDTO } from '../utils/validate'
import { TaskService } from '../services'

const router = Router()
const taskService = new TaskService()

router.post('/', authJwt, async (req, res, next) => {
    try {
        const createDto = await validateDTO(CreateTaskDTO, req.body)
        const task = await taskService.create(createDto)
        res.json(task)
    } catch (e) {
        next(e)
    }
})

router.get('/list/:id', authJwt, async (req, res, next) => {
    try {
        const tasks = await taskService.getByListId(req.params.id) 
        res.json(tasks)
    } catch (e) {
        next(e)
    }
})

router.put('/:id', authJwt, async (req, res, next) => {
    try {
        const updateDto = await validateDTO(UpdateTaskDTO, req.body)
        const task = await taskService.update(updateDto, req.params.id)
        res.json(task)
    } catch (e) {
        next(e)
    }
})

export default router
