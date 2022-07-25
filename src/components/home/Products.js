import ProductItem from "components/home/ProductItem";
import { useSelector } from "react-redux";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

export default function Products() {
    const { products } = useSelector(state => state.products);
    const { cart } = useSelector(state => state.cart);
    return (
        <>
            <p className="mb-2 font-semibold px-8 mt-6">Products</p>
            <div>
                {
                    products.length > 0 ? (
                        <div className="px-8 mb-8 grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3  gap-x-5 gap-y-5">
                            {
                                products.map(product => {
                                    const isOld = cart.map((item) => item.id).includes(product.id);

                                    if (isOld) {
                                        return cart.map((item) => {
                                            if (item.id === product.id) {
                                                return <ProductItem key={product.id} item={product} count={item.count} />
                                            }
                                        });
                                    } else {
                                        return <ProductItem key={product.id} item={product} />
                                    }
                                })
                            }
                        </div>
                    ) : (
                        <div className="w-full px-8">
                           <div className="bg-white p-8 mb-4 flex items-center justify-center flex-col">
                            <div className="w-16 h-16 flex items-center justify-center bg-slate-700 mb-3 rounded-full"><ExclamationCircleIcon className="w-10 h-10 text-white" /></div>
                            <div className="font-semibold text-xl"> Sorry, we can not find this product </div>
                           </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}