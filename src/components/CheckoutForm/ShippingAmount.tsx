import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import shipment from "@/integrations/shipment";
import { currency } from "@/utils";

import { IRajaOnkirResponse, IShippingCostPayload, IShippingCostResponse } from "../../../global";

const ShippingAmount = ({ form, weight }) => {
  const city = form.watch('city');
  const [enableQuery, setEnableQuery] = useState(false);
  const payload = {
    origin: '24', // using bandung barat id
    destination: city,
    weight: weight,
    courier: 'jne'
  }

  const { data } = useQuery({
    queryKey: ['shippingCost'],
    queryFn: async () => {
      let data = await shipment.getShippingCost<IShippingCostPayload, IRajaOnkirResponse<IShippingCostResponse>>(payload);

      setEnableQuery(false);
      return data;
    },
    enabled: enableQuery
  });

  console.log('🚀 ~ data:', data);
  useEffect(() => {
    if (city) {
      setEnableQuery(true);
    }
  }, [city]);

  return (
    <div className="flex justify-between">
      <p className="text-sm">Biaya Pengiriman</p>
      <p className="font-bold text-sm">{currency('Rp ', '0')}</p>
    </div>
  )
}

export default ShippingAmount;
