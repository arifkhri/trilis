import type { NextApiRequest, NextApiResponse } from 'next';

import fetchClient from '@/utils/fetch';

import { IProvince, IRajaOnkirResponse } from '../../../../../global';

const baseUrl = process.env.NEXT_PUBLIC_RAJA_ONGKIR_API;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const headers = {
      key: process.env.NEXT_PUBLIC_RAJA_ONGKIR_APIKEY
    }
    const { get } = fetchClient(baseUrl);
    const response = await get<IRajaOnkirResponse<IProvince>>('/starter/city', {province: req.query.id} ,{ headers});

    res.status(200).json(response);
  } catch (e: any) {
    res.status(e.statusCode).json(e);
  }
}
