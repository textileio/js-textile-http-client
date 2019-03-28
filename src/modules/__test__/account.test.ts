import nock from 'nock'
import Account from '../account'
import { ApiOptions } from '../../models'
import responses from './__static__/account.json'

const opts: ApiOptions = {
  url: 'http://127.0.0.1',
  port: '40600'
}

const ROOT = `${opts.url}:${opts.port}`

const account = new Account(opts)

describe('account seed', () => {
  it('should respond with plain text account seed', async () => {
    nock(ROOT)
      .get('/api/v0/account/seed')
      .reply(200, responses.account.seed)

    expect(account.seed()).resolves.toEqual('123456FAKESEED')
  })
})

describe('account api address', () => {
  it('should respond with plain text address', async () => {
    nock(ROOT)
      .get('/api/v0/account/address')
      .reply(200, responses.account.address)

    expect(account.address()).resolves.toEqual('123456FAKEACCOUNT')
  })
})
