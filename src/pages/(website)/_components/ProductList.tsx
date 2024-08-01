import { IProduct } from "@/common/types/product";
import ProductItem from "./ProductItem";
import { forwardRef } from "react";

type Props = {
    products: any;
    category?: string;
    price?: number;
};
const ProductListWeb = forwardRef<HTMLDivElement, Props>(
    ({ products, category, price }: Props, ref) => {
        // Lọc sản phẩm dựa trên danh mục

        // const filteredProducts =
        //     (category ?? category)
        //         ? products?.data?.filter((item: IProduct) =>
        //               item.category?.some((cate) => cate === category),
        //           )
        //         : products?.data;
        let filteredProducts = products?.data;

        if (category) {
            filteredProducts = filteredProducts?.filter((item: IProduct) =>
                item.category?.some((cate) => cate === category),
            );
        }

        // // Lọc sản phẩm dựa trên giá
        if (price != 0 && price != undefined) {
            console.log("price: " + price);
            filteredProducts = filteredProducts?.filter(
                (item: IProduct) =>
                    item.regular_price >= 0 && item.regular_price <= price,
            );
        }
        return (
            <div
                ref={ref}
                className="grid mb:grid-cols-2 mb:gap-4  lg:grid-cols-4 lg:gap-8 w-full "
            >
                {/* item 1 */}
                {filteredProducts?.map((item: IProduct) => (
                    <ProductItem key={item._id} product={item} />
                ))}
            </div>
        );
    },
);

export default ProductListWeb;
