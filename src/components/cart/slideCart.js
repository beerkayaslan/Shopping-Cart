/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon, PlusIcon, MinusIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from "react-redux";
import { cartSlideAction, addProduct, deleteProduct, deleteCountAllProduct } from "store/reducers/shoppingCart"


export default function Example() {
    const { cartSlide, cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalAmount = cart.length > 0 ? (cart.reduce((cartTotal, cartItem) => {
        return cartTotal + (cartItem.price * cartItem.count)
    }, 0)).toFixed(2) : 0;

    return (
        <Transition.Root show={cartSlide} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => dispatch(cartSlideAction(false))}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => dispatch(cartSlideAction(false))}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-lg font-medium flex items-center gap-x-5 text-gray-900">  <ShoppingCartIcon className="h-6 w-6" /> Shopping Cart </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1">
                                            {/* Replace with your content */}
                                            <div className="absolute inset-0 flex flex-col justify-between">
                                                <div className='flex-1 overflow-auto'>
                                                    {
                                                        cart.length > 0 ? (
                                                            cart.map(item => (
                                                                <div className='border-b border-t p-8 flex' key={item.id}>
                                                                    <div className='relative group'>
                                                                        <img className='w-[105px] object-contain rounded' src={item.img} />
                                                                        <div className='absolute left-0 top-0 w-full h-full bg-gray-200 bg-opacity-80 rounded z-10 flex items-center justify-center cursor-pointer transition-opacity opacity-0 group-hover:opacity-100' onClick={() => dispatch(deleteCountAllProduct(item.id))}>
                                                                            <XIcon className="h-6 w-6 transition-all delay-75 scale-50 group-hover:scale-100 bg-white rounded-full p-1 drop-shadow-lg" aria-hidden="true" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex flex-col flex-1 px-4 justify-between'>
                                                                        <div>
                                                                            <p className='text-[#5a5a5a] text-[13px] mb-2'> {item.title_en} </p>
                                                                            <p className='text-[#999] mb-2 text-[13px]'>Unit Price:${item.price}</p>
                                                                        </div>
                                                                        <div className='flex items-center justify-between select-none'>
                                                                            <div>
                                                                                <div className='items-center h-full flex w-28 mb-1 bg-[#212121] text-white rounded overflow-hidden drop-shadow-lg'>
                                                                                    <div className='w-8 h-8 rounded bg-[#212121] text-white flex items-center justify-center cursor-pointer hover:bg-[#3a3a3a] transition-all' onClick={() => dispatch(deleteProduct(item.id))}><MinusIcon className='w-4 h-4' /></div>
                                                                                    <div className='flex-1 flex items-center justify-center'>{item.count}</div>
                                                                                    <div className='w-8 h-8 rounded bg-[#212121] text-white flex items-center justify-center cursor-pointer hover:bg-[#3a3a3a] transition-all' onClick={() => dispatch(addProduct(item))}><PlusIcon className='w-4 h-4' /></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='font-semibold text-black text-lg'>
                                                                                ${(item.count * item.price).toFixed(2)}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div className='h-full w-full flex items-center justify-center'>
                                                                <div className='flex items-center flex-col'>
                                                                    <div className='w-16 h-16 flex items-center justify-center bg-slate-700 mb-3 rounded-full'><ShoppingBagIcon className='w-8 text-white h-8'/></div>
                                                                    <b className=''>Your cart is empty</b>
                                                                    <p className='px-20 text-center mt-2 text-sm'>No items added in your cart. Please Add product to your cart list.</p>
                                                                </div>
                                                            </div>

                                                        )
                                                    }


                                                </div>
                                                <div className='rounded-lg bg-[#212121] mx-6 text-white flex items-center p-5 justify-between text-lg font-medium'>
                                                    <div>Proceed To Checkout</div>

                                                    <div><span className='mr-3'>|</span>${totalAmount}</div>
                                                </div>
                                            </div>
                                            {/* /End replace */}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
