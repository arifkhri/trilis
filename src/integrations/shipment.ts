
import fetchClient from '@/utils/fetch';

const baseUrl = process.env.NEXT_PUBLIC_APPHOST;

const getShippingCost = <P, R>(payload) => {
  const { post } = fetchClient(baseUrl);

  return post<P, R>('/api/shipment/cost', JSON.stringify(payload));
}

const shipment = { getShippingCost };

export default shipment;
