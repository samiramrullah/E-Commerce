import React from 'react'
import FeatureProductCard from '../utils/Cards/FeatureProductCard'

const FeatureProduct = () => {
    return (
        <>
            <section class="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-800 ">
                <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <h2 class="pb-2 text-xl font-bold text-left text-gray-800 md:text-3xl dark:text-gray-400">
                        Featured Products
                    </h2>
                    <div class="w-20 mb-6 border-b border-red-700 dark:border-gray-400"></div>
                    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
                        
                        <FeatureProductCard/>
                        <FeatureProductCard/>
                        <FeatureProductCard/>
                        <FeatureProductCard/>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureProduct