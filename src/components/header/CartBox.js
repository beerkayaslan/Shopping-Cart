import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from "react-redux";
import { cartSlideAction } from "store/reducers/shoppingCart";

export default function CartBox() {
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();
  
    const ShoppingCartHandle = () => {
        dispatch(cartSlideAction(true));
    }

    return (
        <div className="flex items-center gap-x-6">
            <button className='font-semibold text-lg'>My Account</button>
            <button className='relative' onClick={ShoppingCartHandle}>
                <span className='absolute -right-2 -top-2 bg-gray-900 text-white flex items-center justify-center rounded-full w-5 h-5 text-xs'>{cart.length}</span>
                <ShoppingCartIcon className="h-6 w-6" />
            </button>
        </div>
    )
}

