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
                <body class="px-10 py-20">
    {/* <!-- grid container --> */}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {/* <!-- product card --> */}
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product One</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

        {/* <!-- product card --> */}
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product Two</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

        {/* <!-- product card --> */}
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product Three</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

        {/* <!-- product card --> */}
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product Four</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

        {/* <!-- product card --> */}
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product Five</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

     
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product Six</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

       
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product Seven</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

      
        <a href="https://www.kindacode.com"
            class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <img src=" https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" alt="Fiction Product"
                class="h-36 object-cover rounded-tl-md rounded-tr-md"/>

            <div class="px-3 py-2">
                <h1 class="font-semibold">Product Eight</h1>
                <p class="text-sm">$69.69</p>
            </div>
        </a>

    </div>
</body>
               
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

