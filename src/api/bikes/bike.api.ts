import { GetBikeArgs, GetBikeResponse } from '@/interfaces/bike.interface'
import { QueryFunctionContext } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import api from '../axios'

export const FETCH_BIKES = async ({
  queryKey,
}: QueryFunctionContext<[string, GetBikeArgs]>): Promise<GetBikeResponse> => {
  const params = queryKey[1]
  const response: AxiosResponse<GetBikeResponse> = await api.get('/bikes', {
    params,
  })
  return response.data
}
