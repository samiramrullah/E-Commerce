import React from 'react'
import Productcard from '../utils/Cards/productcard';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/ProductSlice';
import { STATUSES } from '../Redux/ProductSlice';
import Footer from '../components/Footer'
import Loader from '../utils/Loader';

const Product = () => {
    const dispatch = useDispatch();
    const { products: allProducts, productFetchStatus } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    console.log(allProducts);
    if (productFetchStatus == STATUSES.IDEL) {
        return (
            <>
                <Navbar />

                {/* <section class="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900  mt-56">
                    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
                        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                        {allProducts?.map(itm => (
                            <Productcard title={itm.title} img={itm.image} price={itm.price} id={itm.id} />
                        ))}
                        </div>
                    </div>
                </section> */}
                <div className="mx-auto container px-6 xl:px-0 py-12">
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-center">
                            <div className="relative">
                                <img className="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png" alt="sofa" />
                                <img className="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                                <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                                    <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center">
                            {allProducts?.map(itm => (
                                <Productcard title={itm.title} img={itm.image} price={itm.price} id={itm.id} />
                            ))}
                        </div>
                        <div className="flex justify-end items-end mt-12">
                            <div className="flex flex-row items-center justify-center space-x-8">
                                <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                                    <p>1</p>
                                </button>
                                <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                                    <p>2</p>
                                </button>
                                <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                                    <p>3</p>
                                </button>
                                <button className="flex justify-center items-center">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6L15 12L9 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else if (productFetchStatus === STATUSES.LOADING) {
        return (
            <Loader />
        )
    }
    else if (productFetchStatus === STATUSES.ERROR) {
        return (
            <h3>Error in fetching products</h3>
        )
    }

}

export default Product

