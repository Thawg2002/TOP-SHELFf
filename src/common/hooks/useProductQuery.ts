import { getAllProducts, getProductById } from '@/services/product'
import { useQuery } from '@tanstack/react-query'

// { id: 1, _limit: 10, _page: 1 }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useProductQuery = (options?: any) => {
    // {_limit: 2, _page: 1, id: 1}
    const { data, ...rest } = useQuery({
        queryKey: ['PRODUCT_KEY', options],
        queryFn: async () => {
            return options?.id ? await getProductById(options.id as number | string) : await getAllProducts(options)
        }
    })

    return { data, ...rest }
}
