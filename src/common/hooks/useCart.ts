import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

interface CartActionParams {
    userId: string;
    productId?: string;
    productIds?: string[];
    quantity?: number;
    regular_price?: number;
    finalPrice?: number;
    image?: string;
}

const CART_QUERY_KEY = "cart";

const fetchCart = async (userId: string) => {
    const { data } = await axios.get(`${BASE_URL}/carts/${userId}`);
    return data;
};

const modifyCart = async (action: string, params: CartActionParams) => {
    let url;
    let method;

    switch (action) {
        case "add-to-cart":
            url = `${BASE_URL}/carts/add-to-cart`;
            method = "post";
            break;
        case "update":
            url = `${BASE_URL}/carts/update`;
            method = "put";
            break;
        case "remove":
            url = `${BASE_URL}/carts/remove`;
            method = "delete";
            break;
        case "updateQuantity":
            url = `${BASE_URL}/carts/update`;
            method = "put";
            break;
        case "decrease":
            url = `${BASE_URL}/carts/decrease`;
            method = "put";
            break;
        case "increase":
            url = `${BASE_URL}/carts/increase`;
            method = "put";
            break;
        default:
            throw new Error(`Unknown action: ${action}`);
    }

    try {
        const { data } = await axios({
            url,
            method,
            data: params,
        });
        return data.cart;
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
};

const useCart = (userId: string) => {
    const queryClient = useQueryClient();

    const {
        data: cart,
        isLoading,
        error,
    } = useQuery({
        queryKey: [CART_QUERY_KEY, userId],
        queryFn: () => fetchCart(userId),
        enabled: !!userId,
    });

    const mutationOptions = {
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [CART_QUERY_KEY, userId],
            });
            // toast({
            //     variant: "success",
            //     title: "SUSSCESS.",
            // });
        },

        onError: (error: any) => {
            console.error("Mutation error:", error);
            // toast({
            //     variant: "error",
            //     title: "ERROR",
            // });
        },
    };

    const performMutation = (action: string) => {
        return useMutation({
            mutationFn: (params: CartActionParams) =>
                modifyCart(action, params),
            ...mutationOptions,
        });
    };

    return {
        cart,
        isLoading,
        error,
        addItem: performMutation("add-to-cart"),
        // updateQuantity: performMutation("update"),
        removeItem: performMutation("remove"),
        updateQuantity: performMutation("updateQuantity"),
        increaseQuantity: performMutation("increase"),
        decreaseQuantity: performMutation("decrease"),
    };
};

export default useCart;
