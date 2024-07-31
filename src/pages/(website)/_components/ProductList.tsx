import { IProduct } from "@/common/types/product";
import ProductItem from "./ProductItem";

type Props = {
    products: any;
    category?: string;
};
const ProductListWeb = ({ products, category }: Props) => {
    // Lọc sản phẩm dựa trên danh mục
    const filteredProducts = category
        ? products?.data?.filter((item: IProduct) =>
              item.category?.some((cate) => cate === category),
          )
        : products?.data;

    return (
        <div className="grid mb:grid-cols-2 mb:gap-4  lg:grid-cols-4 lg:gap-8 w-full ">
            {/* item 1 */}
            {filteredProducts?.map((item: IProduct) => (
                <ProductItem key={item._id} product={item} />
            ))}
        </div>
    );
};

export default ProductListWeb;
