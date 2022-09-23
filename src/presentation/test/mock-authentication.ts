import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { AuthenticantionParams, Authentication } from '@/domain/usecases'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticantionParams

  async auth (params: AuthenticantionParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}
