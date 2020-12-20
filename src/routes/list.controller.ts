import { Router } from 'express'
import { CreateListDTO } from '../dtos/list.dto'
import { authJwt } from '../middlewares'
import { ListService } from '../services'
import { validateDTO } from '../utils/validate'

const router = Router()
const listService = new ListService()

// categories/2323/lists
router.post('/:id/lists', authJwt, async (req, res, next) => {
    try {
        const createListDto = await validateDTO(CreateListDTO, req.body)
        const list = await listService.create(
            createListDto,
            req.params.id,
            req.user.id
        )

        res.json(list)
    } catch (e) {
        next(e)
    }
})

router.get('/:id/lists', async (req, res, next) => {
    try {
        const lists = await listService.findAll(req.params.id)
        res.json(lists)
    } catch (e) {
        next(e)
    }
})

export default router
