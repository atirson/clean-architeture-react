import { AccountModel } from '@/domain/models/account-model'

export type AutheticantionParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AutheticantionParams) => Promise<AccountModel>
}
