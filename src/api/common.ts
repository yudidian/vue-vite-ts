import request from '@/utils/request'
import type { ILoginInfo } from '@/utils/types/commons'

export const loginInfo = () => {
  return request<ILoginInfo>({
    url: '/login',
    method: 'GET'
  })
}
