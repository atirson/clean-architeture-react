import { AccountModel } from '@/domain/models'
import { AutheticantionParams } from '@/domain/usecases'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AutheticantionParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
