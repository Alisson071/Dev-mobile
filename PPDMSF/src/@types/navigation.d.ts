import { Product } from "../modules/Home";
export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            Login: undefined;
            Profile: undefined;
            Home: {data:any};
            Card: data = Product;
            Cart: data = Product;
            ProductCart: undefined;
        }
    }
}