import { AccountModel } from '@/domain/models/account-model'

export type AuthenticantionParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticantionParams) => Promise<AccountModel>
}
