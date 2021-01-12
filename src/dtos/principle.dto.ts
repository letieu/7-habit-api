import { IsDefined, IsNotEmpty } from 'class-validator'

export class CreatePrincipleDTO {
  @IsNotEmpty()
  @IsDefined()
  name: string

  detail: string
}

export class UpdatePrincipleDTO {
  name: string
  detail: string
}
