import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useSelector,useDispatch} from 'react-redux';
import '../../styles/Home.module.css';
const Productcard = ({ title, price, img, id }) => {
   
    return (
        <>
          <div class=" p-6 border-t border-b border-r first:border-l dark:border-gray-700 dark:bg-gray-900">
                                <div class="relative">
                                    <Link href={`productdetails/${id}`} class="block">
                                        <img src={img}
                                            class="object-cover w-full h-64 rounded" alt="" />
                                    </Link>
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
                                            class="text-xl font-bold text-black dark:text-gray-300">Rs {price}

                                        </span></p>
                                        <p class="text-gray-500">
                                            {title}
                                        </p>
                                    </a>

                                    <div class="relative flex items-center justify-between"></div>
                                </div>
                            </div>
                            
        </>

    )
}

export default Productcard