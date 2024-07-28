import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Import Swiper React components
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IProduct } from "@/common/types/product";
type Props = {
    product: IProduct;
};
// import required modules
const ProductDetailLeft = ({ product }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <>
            <div>
                <Swiper
                    // style={{
                    //     "--swiper-navigation-color": "#fff",
                    //     "--swiper-pagination-color": "#fff",
                    // }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {product?.gallery?.map((item: string, index: number) => {
                        return (
                            <SwiperSlide
                                className="lg:w-[573px] lg:h-[520px] border border-solid border-[#F4F4F4] flex justify-center items-center"
                                key={index}
                            >
                                <img
                                    src={item}
                                    className="lg:w-[400px] lg:h-[400px] object-cover"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {product?.gallery?.map((item: string, index: number) => {
                        return (
                            <SwiperSlide
                                className="cursor-pointer  lg:w-[64px] lg:h-[64px] border border-solid border-[#F4F4F4] flex justify-center items-center bg-[#F4F4F4]"
                                key={index}
                            >
                                <img
                                    src={item}
                                    className="lg:w-[48px] lg:h-[48px] object-cover "
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default ProductDetailLeft;
