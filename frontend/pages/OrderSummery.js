import React from 'react'
import Footer from '../components/footer'
import Navbar from '../Components/navbar'
import CartCard from '../utils/Cards/CartCard'
import {useSelector} from 'react-redux'

const OrderSummery = () => {
    const cartItems=useSelector((state)=>state.cart);
    return (
        <>
            <Navbar/>
            <section class="items-center py-24 bg-gray-50 font-poppins dark:bg-gray-700">
                <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 lg:px-6">
                    <h2 class="mb-10 text-4xl font-bold text-center dark:text-gray-400">Your Cart</h2>
                    <div class="px-6 mb-10 lg:px-0">
                        {cartItems?.map(itm=>(
                            <CartCard title={itm.title} price={itm.price} img={itm.image} id={itm.id}/>
                        ))}

                    </div>
                    <div class="flex flex-wrap justify-between">
                        <div class="w-full lg:w-1/3">
                            <div class="mb-10">
                                <span class="text-xl font-bold text-gray-700 dark:text-gray-400">Apply Coupon</span>
                                <input type="text" class="flex-1 w-full px-8 py-4 mt-4 font-normal placeholder-gray-400 border rounded-xl dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800" placeholder="x304k45" required="" />
                                <a class="inline-block w-full px-6 py-4 mt-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-blue-500 lg:w-auto hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Apply</a>
                            </div>
                        </div>
                        <div class="w-full lg:w-1/3">
                            <div>
                                <h2 class="mb-6 text-3xl font-bold dark:text-gray-400">Cart totals</h2>
                                <div class="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                    <span>Subtotal</span>
                                    <span class="flex items-center text-xl">
                                        <span class="mr-2 text-base">$</span>
                                        <span>710,70</span>
                                    </span>
                                </div>
                                <div class="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                    <span>Shipping</span>
                                    <span class="flex items-center text-xl">
                                        <span class="mr-2 text-base">$</span>
                                        <span>10,00</span>
                                    </span>
                                </div>
                                <div class="flex items-center justify-between px-10 py-4 mb-6 font-medium leading-8 bg-gray-100 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                    <span>Total</span>
                                    <span class="flex items-center text-xl text-blue-500 dark:text-blue-400">
                                        <span class="mr-2 text-base">$</span>
                                        <span>720,70</span>
                                    </span>
                                </div>
                                <a class="inline-block w-full px-6 py-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-blue-500 lg:w-auto hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default OrderSummery