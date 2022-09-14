import { AutheticantionParams } from '@/domain/usecases/authentication'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AutheticantionParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
