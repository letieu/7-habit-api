import { Router, Request } from 'express'
import { Controller } from '../core/controller'
import { principleService } from '../services/principle.service'
import { authJwt } from '../middlewares/authJwt.middleware'
import { validateDTO } from '../core/validate'
import { CreatePrincipleDTO, UpdatePrincipleDTO } from '../dtos/principle.dto'

const router = Router()

router.post('/', authJwt, 
  Controller(async (req: Request) => 
  {
    const principleDTO = await validateDTO(CreatePrincipleDTO, req.body.principle)
    const principle = await principleService.create(principleDTO, req.user)

    return { principle }
  })
)

router.get('/', authJwt, Controller(async (req: Request) => 
  {
    const principles = await principleService.findByUser(req.user)
    return { principles }
  })
)

router.put('/:id', authJwt, Controller(async (req: Request) => 
  {
    const principleDTO = await validateDTO(UpdatePrincipleDTO, req.body.principle) 
    const principle = await principleService.update(principleDTO, req.params.id, req.user)

    return { principle }
  })
)

router.delete('/:id', authJwt, Controller(async (req: Request) => 
  {
    const principle = await principleService.delete(req.params.id, req.user)
    return { deleted: principle }
  })
)


export default router
