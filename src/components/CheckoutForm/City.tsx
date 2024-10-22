import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import address from "@/integrations/address";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue} from "../ui/Select";
import { ICity, IRajaOnkirResponse } from "../../../global";


const City = ({form, ...restProps}) => {
  const [enableQuery, setEnableQuery] = useState(false);

  const provinceId = form.watch('province');

  const { data } = useQuery({
    queryKey: ['city'],
    queryFn: async () => {
      let data = await address.getCity<IRajaOnkirResponse<ICity>>(provinceId);

      setEnableQuery(false);
      return data;
    },
    enabled: enableQuery
  });

  useEffect(() => {
    if(provinceId) {
      setEnableQuery(true);
    }
  }, [provinceId]);

  const handleSelect = (value) => {
    form.setValue('city', value);
  }

  return (
    <Select {...restProps} onValueChange={(value) => handleSelect(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Pilih Kota" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Kota</SelectLabel>
          {
            (data?.rajaongkir?.results || []).map(({city_id, city_name}) => (
              <SelectItem key={city_id} value={city_id.toString()}>{city_name}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default City;
