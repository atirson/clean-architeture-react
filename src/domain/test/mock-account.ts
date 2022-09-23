import { AccountModel } from '@/domain/models'
import { AuthenticantionParams } from '@/domain/usecases'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AuthenticantionParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
