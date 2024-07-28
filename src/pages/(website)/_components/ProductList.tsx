import { IProduct } from "@/common/types/product";
import ProductItem from "./ProductItem";

type Props = {
    products: any;
};
const ProductListWeb = ({ products }: Props) => {
    return (
        <div className="grid mb:grid-cols-2 mb:gap-4  lg:grid-cols-4 lg:gap-8 w-full ">
            {/* item 1 */}
            {products?.data?.map((item: IProduct) => (
                <ProductItem key={item._id} product={item} />
            ))}
        </div>
    );
};

export default ProductListWeb;
