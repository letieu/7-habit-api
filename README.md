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
