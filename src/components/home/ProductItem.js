
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { addProduct, deleteProduct } from 'store/reducers/shoppingCart';
import { useDispatch } from 'react-redux';

export default function ProductItem({ item, count }) {

    const dispatch = useDispatch();

    const productAddHandle = (product) => {
        dispatch(addProduct(product));
    }

    return (
        <div className='p-4 rounded overflow-hidden bg-white cursor-pointer transition-all border-2 duration-200 border-transparent  hover:-translate-y-1 hover:border-black select-none flex flex-col justify-between'>
            <div>
                <img src={item.img} className="w-full object-contain h-52 " />
                <b className='block pl-2'>  ${item.price}</b>
                <span className='pl-1 text-sm text-gray-500'>
                    {item.title_en}
                </span>
            </div>
            <div className='mt-4 rounded overflow-hidden group select-none h-8'>
                {
                    count ? (
                        <div className='items-center h-full flex'>
                            <div className='w-8 h-8 rounded bg-[#212121] text-white flex items-center justify-center' onClick={() => dispatch(deleteProduct(item.id))}><MinusIcon className='w-4 h-4' /></div>
                            <div className='flex-1 flex items-center justify-center'>{count}</div>
                            <div className='w-8 h-8 rounded bg-[#212121] text-white flex items-center justify-center' onClick={() => productAddHandle(item)}><PlusIcon className='w-4 h-4' /></div>
                        </div>
                    )
                        : (
                            <div className='flex items-center h-full' onClick={() => productAddHandle(item)}>
                                <div className='flex-1 h-full bg-[#f3f3f3] transition-all flex items-center justify-center text-xs font-semibold group-hover:bg-[#212121] group-hover:text-white'>ADD</div>
                                <div className='h-full flex items-center justify-center transition-all w-8 bg-[#e6e6e6] group-hover:bg-[#3a3a3a] group-hover:text-white'><PlusIcon className='w-4 h-4' /></div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}