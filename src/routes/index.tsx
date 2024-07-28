import CategoryAdd from "@/pages/(dashboard)/category/add/page";
import CategoryEdit from "@/pages/(dashboard)/category/edit/page";
import CategoryList from "@/pages/(dashboard)/category/page";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductAddPage from "@/pages/(dashboard)/product/add/page";
import ProductEditPage from "@/pages/(dashboard)/product/edit/page";
import ProductManagement from "@/pages/(dashboard)/product/page";
import Signin from "@/pages/(website)/(auth)/Signin";
import Signup from "@/pages/(website)/(auth)/Signup";
import NotFound from "@/pages/(website)/404/page";
import CartUser from "@/pages/(website)/cart/page";
import CheckoutPage from "@/pages/(website)/checkout/page";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import DetailProduct from "@/pages/(website)/product/[id]/page";
import ShopPage from "@/pages/(website)/product/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="products/:id" element={<DetailProduct />} />
                    <Route path="products" element={<ShopPage />} />
                    <Route path="cart" element={<CartUser />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Route>
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route path="products" element={<ProductManagement />} />
                    <Route path="products/add" element={<ProductAddPage />} />
                    <Route
                        path="products/:id/edit"
                        element={<ProductEditPage />}
                    />
                    <Route path="category" element={<CategoryList />} />
                    <Route path="category/add" element={<CategoryAdd />} />
                    <Route
                        path="category/:id/edit"
                        element={<CategoryEdit />}
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Router;
