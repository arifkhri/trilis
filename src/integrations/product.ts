
import fetchClient from '@/utils/fetch';


const getList = <R>() => {
  const { get } = fetchClient();

  return get<R>('/products');
}

const getDetail = <R>(id: string) => {
  const { get } = fetchClient();

  return get<R>(`/products/${id}`);
}

const product = { getList, getDetail };

export default product;
