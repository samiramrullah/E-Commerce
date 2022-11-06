import React from 'react'
import Productcard from '../utils/Cards/productcard';
import Navbar from '../components/navbar';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { fetchProducts } from '../Redux/ProductSlice';
import { STATUSES } from '../Redux/ProductSlice';
import Loader from '../utils/Loader';

const Product = () => {
    const dispatch=useDispatch();
    const { products:allProducts, productFetchStatus } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    if(productFetchStatus==STATUSES.IDEL)
    {
        return (
            <>
            <Navbar/>
            <section class="flex pt-4 bg-white lg:h-screen dark:bg-gray-800">
        <div class=" mx-auto max-w-7xl">
            <div class="grid grid-cols-1 gap-4 lg:gap-0 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="p-6 border-t border-b border-r first:border-l dark:border-gray-700 dark:bg-gray-900">
                    <div class="relative">
                        <a class="block">
                            <img src="https://i.postimg.cc/tghbJjN7/pexels-web-donut-19090.jpg"
                                class="object-cover w-full h-64 rounded" alt=""/>
                        </a>
                    </div>
                    <div class="pt-6">
                        <a href="#"
                            class="flex px-4 py-2 mb-4 font-bold text-white uppercase bg-blue-600 rounded-full w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 icon icon-tabler icon-tabler-plus"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span class="text-sm">
                                Add To Cart
                            </span>
                          
                        </a>

                        <a class="">
                            <p class="mb-2 text-lg font-bold text-black dark:text-gray-400"><span
                                    class="text-xl font-bold text-black dark:text-gray-300">Rs 129,000
                                   
                                </span></p>
                            <p class="text-gray-500">
                                Adidas Nike Shoe With No Strings
                            </p>
                        </a>

                        <div class="relative flex items-center justify-between"></div>
                    </div>
                </div>
                <div class="p-6 border-t border-b border-r first:border-l dark:border-gray-700 dark:bg-gray-900">
                    <div class="relative">
                        <a class="block">
                            <img src="https://i.postimg.cc/RZ4Qy1p8/pexels-nathan-j-hilton-4277508.jpg"
                                class="object-cover w-full h-64 rounded" alt=""/>
                        </a>
                    </div>
                    <div class="pt-6">
                        <a href="#"
                            class="flex px-4 py-2 mb-4 font-bold text-white uppercase bg-blue-600 rounded-full w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 icon icon-tabler icon-tabler-plus"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span class="text-sm">
                                Add To Cart
                            </span>
                           
                        </a>

                        <a class="">
                            <p class="mb-2 text-lg font-bold text-black dark:text-gray-400"><span
                                    class="text-xl font-bold text-black dark:text-gray-300">Rs 129,000
                                   
                                </span></p>
                            <p class="text-gray-500">
                                Adidas Nike Shoe With No Strings
                            </p>
                        </a>

                        <div class="relative flex items-center justify-between"></div>
                    </div>
                </div>
                <div class="p-6 border-t border-b border-r first:border-l dark:border-gray-700 dark:bg-gray-900">
                    <div class="relative">
                        <a class="block">
                            <img src="https://i.postimg.cc/Z5w3QGdB/pexels-kabita-darlami-5788986.jpg"
                                class="object-cover w-full h-64 rounded" alt=""/>
                        </a>
                    </div>
                    <div class="pt-6">
                        <a href="#"
                            class="flex px-4 py-2 mb-4 font-bold text-white uppercase bg-blue-600 rounded-full w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 icon icon-tabler icon-tabler-plus"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span class="text-sm">
                                Add To Cart
                            </span>
                           
                        </a>

                        <a class="">
                            <p class="mb-2 text-lg font-bold text-black dark:text-gray-400"><span
                                    class="text-xl font-bold text-black dark:text-gray-300">Rs 129,000
                                    
                                </span></p>
                            <p class="text-gray-500">
                                Adidas Nike Shoe With No Strings
                            </p>
                        </a>

                        <div class="relative flex items-center justify-between"></div>
                    </div>
                </div>
                <div class="p-6 border-t border-b border-r first:border-l dark:border-gray-700 dark:bg-gray-900">
                    <div class="relative">
                        <a class="block">
                            <img src="https://i.postimg.cc/hP5c3MG4/pexels-melvin-buezo-2529148.jpg"
                                class="object-cover w-full h-64 rounded" alt=""/>
                        </a>
                    </div>
                    <div class="pt-6">
                        <a href="#"
                            class="flex px-4 py-2 mb-4 font-bold text-white uppercase bg-blue-600 rounded-full w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 icon icon-tabler icon-tabler-plus"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span class="text-sm">
                                Add To Cart
                            </span>
                           
                        </a>

                        <a class="">
                            <p class="mb-2 text-lg font-bold text-black dark:text-gray-400"><span
                                    class="text-xl font-bold text-black dark:text-gray-300">Rs 129,000
                                   
                                </span></p>
                            <p class="text-gray-500">
                                Adidas Nike Shoe With No Strings
                            </p>
                        </a>

                        <div class="relative flex items-center justify-between"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </>
        )
    }
    else if(productFetchStatus===STATUSES.LOADING)
    {
        return(
            <Loader/>
        )
    }
    else if(productFetchStatus===STATUSES.ERROR)
    {
        return(
            <h3>Error in fetching products</h3>
        )
    }
    
}

export default Product

