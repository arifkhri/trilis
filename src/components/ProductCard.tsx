import { useRouter } from "next/router";
import { HTMLAttributes, useCallback } from "react";

import { Card, CardContent } from "@/components/ui/Card";

import { currency } from "@/utils";

import { Button } from "./ui/Button";

interface ProductCardProps extends HTMLAttributes<any> {
  price: number;
  title: string;
  thumbnail: string;
  weight?: number;
  description: string;
  showCheckoutBtn?: boolean;
}

const ProductCard = ({ id, price = 0, title, weight, thumbnail, description, showCheckoutBtn, ...restProps }: ProductCardProps) => {
  const { push: navigate } = useRouter();

  const toCheckout = useCallback(() => {
    navigate(`/checkout/${id}`);
  }, [id])

  return (
    <Card {...restProps} className="flex sm:w-[320px] justify-content border-b mb-2 rounded p-3">
      <CardContent className="flex flex-col justify-between px-2 pb-0 pt-2">
        <div className="flex flex-col">
          <img className="max-h-[140px] max-w-[300px]" src={thumbnail} alt={title} />
          <span className="text-base font-bold">{title}</span>
          <span className="text-amber-500 font-light">
            {currency('Rp. ', price.toString())}
          </span>

          {
            weight && (
              <p className="text-xs">
                Berat: {weight} gram
              </p>
            )
          }

          <p className="text-base mt-3" style={{ whiteSpace: 'pre-line' }}>
            {description}
          </p>
        </div>
        {
          showCheckoutBtn && (
            <div className="flex mt-3">
              <Button className="mb-2" size="sm" onClick={toCheckout}>
                Checkout
              </Button>
            </div>
          )
        }
      </CardContent>
    </Card>
  )
}

export default ProductCard;
