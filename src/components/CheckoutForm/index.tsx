
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Textarea } from "@/components/ui/Textarea";

import City from "./City";
import Province from "./Province";

const CheckoutForm = ({ form }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">Alamat*</FormLabel>
            <FormControl>
              <Textarea {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-between">
        <FormField
          control={form.control}
          name="province"
          render={({ field }) => (
            <FormItem className="w-full pe-2">
              <FormLabel className="text-black">Provinsi*</FormLabel>
              <FormControl>
                <Province {...field} form={form} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full ps-2">
              <FormLabel className="text-black">Kota*</FormLabel>
              <FormControl>
                <City {...field} form={form} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}


export default CheckoutForm;
