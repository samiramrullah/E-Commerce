import React from 'react'
import Productcard from '../utils/Cards/productcard';
import Navbar from '../components/navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/ProductSlice';
import { STATUSES } from '../Redux/ProductSlice';
import Footer from '../components/footer'
import Loader from '../utils/Loader';

const Product = () => {
    const dispatch = useDispatch();
    const { products: allProducts, productFetchStatus } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    if (productFetchStatus == STATUSES.IDEL) {
        return (
            <>
                <Navbar />
                <section class="flex pt-4 bg-white lg:h-screen dark:bg-gray-800">
                    <div class=" mx-auto max-w-7xl">
                        <div class="grid grid-cols-1 gap-4 lg:gap-0 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {allProducts?.map(itm => (
                                <Productcard title={itm.title} price={itm.price} img={itm.image} id={itm.id} />
                            ))}
                        </div>
                    </div>
                </section>
               
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

