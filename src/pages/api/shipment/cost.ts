import type { NextApiRequest, NextApiResponse } from 'next';

import fetchClient from '@/utils/fetch';

import { IRajaOnkirResponse, IShippingCostPayload, IShippingCostResponse } from '../../../../global';

const baseUrl = process.env.NEXT_PUBLIC_RAJA_ONGKIR_API;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const headers = {
      key: process.env.NEXT_PUBLIC_RAJA_ONGKIR_APIKEY
    }
    const { post } = fetchClient(baseUrl);
      const payload = req.body;
      console.log('🚀 ~ payload:', payload);
      const response = await post<IShippingCostPayload, IRajaOnkirResponse<IShippingCostResponse>>('/starter/cost', payload, {headers});
      console.log('🚀 ~ response:', response);

    res.status(200).json(response);
  } catch (e: any) {
    res.status(e.statusCode).json(e);
  }
}
