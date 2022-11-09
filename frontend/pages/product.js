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
                <div class="px-10">
                    {/* <!-- grid container --> */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                        {allProducts?.map(itm => (
                            <Productcard title={itm.title} img={itm.image} price={itm.price} />
                        ))}

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

