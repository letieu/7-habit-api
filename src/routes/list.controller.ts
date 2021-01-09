import { Router } from 'express'
import { CreateListDTO } from '../dtos/list.dto'
import { authJwt } from '../middlewares'
import { ListService } from '../services'
import { validateDTO } from '../utils/validate'

const router = Router()
const listService = new ListService()

// categories/2323/lists
router.post('/:name/lists', authJwt, async (req, res, next) => {
    try {
        const createListDto = await validateDTO(CreateListDTO, req.body)
        const list = await listService.create(
            createListDto,
            req.params.name,
            req.user.id
        )

        res.json(list)
    } catch (e) {
        next(e)
    }
})

router.get('/:name/lists', authJwt, async (req, res, next) => {
    try {
        const lists = await listService.findAll(req.params.name, req.user)
        res.json(lists)
    } catch (e) {
        next(e)
    }
})

router.delete('/:name/lists/:id', authJwt, async (req, res, next) => {
    try {
        const result = await listService.remove(req.params.id)
        res.json(result)
    } catch (e) {
        next(e)
    }
})

router.put('/:name/lists/:id', authJwt, async (req, res, next) => {
    try {
        const updateDto = await validateDTO(CreateListDTO, req.body)
        const list = await listService.update(updateDto, req.params.name, req.user.id, req.params.id)
        res.json(list)
    } catch (e) {
        next(e)
    }
})

export default router
