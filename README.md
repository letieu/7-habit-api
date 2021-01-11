# express-starter
express mongoose typescript class-validator jwt


### Install 
```bash
yarn install
cp .env.example .env

# run nodemon
yarn dev
```

### Folder structure
```bash
├── server.ts
├── app.ts
├── config.ts
│
├── core                                 # Base of framework ( Don't edit it ! )
│   ├── controller.ts
│   ├── error.ts
│   └── validate.ts
│
├── dtos                                 # Validate request
│   └── user.dto.ts
│
├── middlewares                          # 
│   ├── index.ts
│   ├── error.middleware.ts
│   └── authJwt.middleware.ts
│
├── models                               # Define mongoose models
│   └── user.model.ts
│
├── routes                               # Route, where create Dto ( Validate) , call Service and return response
│   ├── index.ts
│   ├── auth.controller.ts
│   └── user.controller.ts
│
├── services                             # Business logic
│   ├── index.ts
│   ├── auth.service.ts
│   ├── base.service.ts
│   └── user.service.ts
│
├── types                                # define Type, interface
│   ├── base.type.ts
│   └── user.type.ts
│
└── utils
    └── jwt.utils.ts
    
```

### feature
😈 Simple

🔏 Jwt login, register

🚀 Best error handle

💎 Best validate use class-validator

📁 Best folder structure

### Define controller

```javascript
// import ....  method, DTO, Service, Class ......

const router = Router()

router.post('/login',

  // All error throw in Controller, Service will be catch in error Middleware auto
  Controller( async (req: Request) => {
    const loginDto: LoginDTO    = await validateDTO(LoginDTO, req.body.user)
    const user:     ResAuth     = await authService.login(loginDto)
    return { user }
  }, 200)
)

router.post('/register',

  Controller( async (req: Request) => {
    const userDto: RegisterDTO   = await validateDTO(RegisterDTO, req.body.user)
    const user:    IUser         = await usersService.create(userDto)
    return { user }
  })
)

router.get('/me', authJwt, 

  Controller( async (req: Request) => {
    const user: IUser = req.user
    return { user }
  })
)

export default router
```






