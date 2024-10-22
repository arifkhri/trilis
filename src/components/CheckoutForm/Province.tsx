import { useQuery } from "react-query";

import address from "@/integrations/address";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../ui/Select";
import { IProvince, IRajaOnkirResponse } from "../../../global";


const Province = ({ form, ...restProps }) => {

  const { data } = useQuery({
    queryKey: ['province'],
    queryFn: async () => {
      let data = await address.getProvince<IRajaOnkirResponse<IProvince>>();

      return data;
    }
  });

  const handleSelect = (value) => {
    form.setValue('province', value);
    form.setValue('city', '');
  }

  return (
    <Select {...restProps} onValueChange={(value) => handleSelect(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Pilih Provinsi" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Provinsi</SelectLabel>
          {
            (data?.rajaongkir?.results || []).map(({ province_id, province }) => (
              <SelectItem key={province_id} value={province_id}>{province}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Province;
