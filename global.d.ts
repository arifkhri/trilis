export interface ILocalDataContext {
  store: {
    data: any;
  };
  dispatch: any;
}

export interface IModal {
  open: boolean;
  content?: JSX.Element;
  title?: string;
}

export type BaseProps = React.AllHTMLAttributes<any>;

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  [key: string]: any;
}

export interface IList<R> {
  limit: number;
  skip: number;
  [key: string]: R[];
  total: number;
}

export interface IRajaOnkirResponse<R> {
  rajaongkir: {
    query: any;
    status: {
        code: number;
        description: string;
    };
    results: R[];
  }
}

export interface IProvince {
  province_id: string;
  province: string;
}

export interface ICity extends IProvince {
  city_id: number;
  type: string;
  city_name: string;
  postal_code: number
}


export interface IShippingCostPayload {
  origin: string;
  destination: string;
  weight: number;
  courier: string;
}

export interface IShippingCostItem {
  service: string;
  description: string;
  cost: {value: number, etd: string, note: string}[];
}
export interface IShippingCostResponse {
  code: string;
  name: string;
  costs: IShippingCostItem[];
}
