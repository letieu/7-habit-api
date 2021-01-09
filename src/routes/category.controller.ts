import { Router } from 'express'
import { CategoryService } from '../services/category.service'
import { CreateCategoryDTO } from '../dtos/category.dto'
import { validateDTO } from '../utils/validate'
import { authJwt } from '../middlewares'

const categoryService = new CategoryService()
const router = Router()

router.post('/', authJwt, async (req, res, next) => {
    try {
        const categoryDto = await validateDTO(
            CreateCategoryDTO,
            {
                user_id: req.user.id,
                ...req.body
            }
        )
        const category = await categoryService.create(categoryDto)
        res.json(category)
    } catch (e) {
        next(e)
    }
})

router.get('/', authJwt, async (req, res, next) => {
    try {
        const categories = await categoryService.findByUserID(req.user.id)
        res.json(categories)
    } catch (e) {
        next(e)
    }
}) 

router.put('/:id', authJwt, async (req, res, next) => {
    try {
        const updateDto = await validateDTO(
            CreateCategoryDTO,
            {
                user_id: req.user.id,
                ...req.body
            }
        )
        const category = await categoryService.update(updateDto, req.params.id)
        res.json(category)
    } catch (e) {
        next(e)
    }
})

export default router

router.delete('/:id', authJwt, async (req, res, next) => {
    try {
        const result = await categoryService.remove(req.params.id, req.user.id)
        res.json(result)
    } catch (e) {
        next(e)
    }
} )
