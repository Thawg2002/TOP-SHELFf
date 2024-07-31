import { IProduct } from "@/common/types/product";
import { ProductJoiSchema } from "@/common/validations/product";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import instance from "@/configs/axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { uploadFileCloudinary } from "@/common/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductAddPage = () => {
    const [image, setImage] = useState<string>("");
    const [gallery, setGallery] = useState<any[]>([]);
    // const navigate = useNavigate();

    const form = useForm<IProduct>({
        resolver: joiResolver(ProductJoiSchema),
        defaultValues: {
            name: "",
            category: [],
            regular_price: 0,
            image: "",
            gallery: [],
            description: "",
            discount: 0,
            countInStock: 0,
            featured: false,
            attributes: [],
        },
    });
    // Lấy Category
    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get("/categories"),
    });
    // console.log("data", data?.data?.categories);
    //Lấy Gía trị từ form Sản phẩm để Thêm
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (formData) => instance.post("/products", formData),
        onSuccess: () => {
            form.reset();
            toast({
                variant: "success",
                title: "Thêm sản phẩm thành công",
            });
            // navigate("/admin/products");
        },
        onError: () => {
            toast({
                variant: "default",
                title: "Thêm sản phẩm thất bại",
            });
        },
    });
    const onSubmit = async (values: any) => {
        console.log({
            ...values,
            gallery,
            image,
        });
        mutate({ ...values, gallery, image });
    };
    const toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
    ];
    const modules = {
        toolbar: toolbarOptions,
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <>
            <div className="flex justify-between">
                <h2 className="font-medium text-xl my-2">Thêm sản phẩm</h2>

                <Link to={"/admin/products"}>
                    <Button>Quay lại</Button>
                </Link>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 grid grid-cols-[auto_400px] gap-8"
                >
                    <div className="">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tên sản phẩm</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tên sản phẩm"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="regular_price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Giá</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    parseFloat(e.target.value),
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div>
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ảnh đại diện</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nhập URL ảnh đại diện"
                                                {...field}
                                                type="file"
                                                onChange={async (e) => {
                                                    const files = Array.from(
                                                        e.target
                                                            .files as FileList,
                                                    );
                                                    // console.log("files", files);
                                                    const result =
                                                        await Promise.all(
                                                            files.map((file) =>
                                                                uploadFileCloudinary(
                                                                    file,
                                                                ),
                                                            ),
                                                        );
                                                    console.log(
                                                        "result",
                                                        result,
                                                    );
                                                    setImage(result[0]?.url);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <img src={image} alt="" />
                        </div>

                        <div>
                            <FormField
                                control={form.control}
                                name="gallery"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Thư viện ảnh</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Hãy chọn ảnh"
                                                {...field}
                                                type="file"
                                                multiple
                                                onChange={async (e) => {
                                                    const files = Array.from(
                                                        e.target
                                                            .files as FileList,
                                                    );
                                                    // console.log("files", files);
                                                    const result =
                                                        await Promise.all(
                                                            files.map((file) =>
                                                                uploadFileCloudinary(
                                                                    file,
                                                                ),
                                                            ),
                                                        );
                                                    console.log(
                                                        "result",
                                                        result,
                                                    );
                                                    setGallery(
                                                        result.map(
                                                            (item: any) =>
                                                                item?.url,
                                                        ),
                                                    );
                                                }}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Chọn nhiều ảnh cùng lúc
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-3 gap-4">
                                {gallery.map((item, index) => (
                                    <img key={index} src={item} alt="" />
                                ))}
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="discount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Giảm giá (%)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    parseFloat(e.target.value),
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="countInStock"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số lượng trong kho</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    parseInt(e.target.value),
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="h-[500px]">
                                    <FormLabel>Mô tả</FormLabel>
                                    <FormControl>
                                        <ReactQuill
                                            className="h-[400px]"
                                            modules={modules}
                                            theme="snow"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="featured"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mt-3">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Sản phẩm nổi bật
                                        </FormLabel>
                                        <FormDescription>
                                            Đánh dấu sản phẩm này là sản phẩm
                                            nổi bật
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            id="airplane-mode"
                                            checked={field.value}
                                            // className="{field.value}"
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="">
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base">
                                            Danh mục
                                        </FormLabel>
                                        <FormDescription>
                                            Chọn danh mục sản phẩm
                                        </FormDescription>
                                    </div>
                                    {categories?.data?.categories.map(
                                        (category: any) => (
                                            <FormItem
                                                key={category._id}
                                                className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={(
                                                            field.value ?? []
                                                        ).includes(
                                                            category._id,
                                                        )}
                                                        onCheckedChange={(
                                                            checked,
                                                        ) => {
                                                            const newValue =
                                                                field.value ??
                                                                [];
                                                            field.onChange(
                                                                checked
                                                                    ? [
                                                                          ...newValue,
                                                                          category._id,
                                                                      ]
                                                                    : newValue.filter(
                                                                          (
                                                                              value,
                                                                          ) =>
                                                                              value !==
                                                                              category._id,
                                                                      ),
                                                            );
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {category.name}
                                                </FormLabel>
                                            </FormItem>
                                        ),
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="attributes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Thuộc tính</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập thuộc tính (phân cách bằng dấu phẩy)"
                                            {...field}
                                            value={field.value?.join(",")}
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.value
                                                        .split(",")
                                                        .map((item) =>
                                                            item.trim(),
                                                        ),
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Nhập các thuộc tính, phân cách bằng dấu
                                        phẩy
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="">
                        {isPending ? <Loader2Icon /> : "Submit"}
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default ProductAddPage;
