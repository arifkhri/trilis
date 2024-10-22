
import fetchClient from '@/utils/fetch';

const baseUrl = process.env.NEXT_PUBLIC_APPHOST;

const getProvince = <R>() => {
  const { get } = fetchClient(baseUrl);

  return get<R>('/api/address/province', '');
}

const getCity = <R>(province: string) => {
  const { get } = fetchClient(baseUrl);

  return get<R>(`/api/address/city/${province}`);
}

const address = { getProvince, getCity };

export default address;
