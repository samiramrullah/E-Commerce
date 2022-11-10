import React from "react";
import Productcard from "../utils/Cards/productcard";

const Test = () => {
    return (
        <section class="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
            <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                    <Productcard/>
                    
                    
                    <Productcard/>
                    <Productcard/>
                    <Productcard/>
                    <Productcard/>
                    <Productcard/>
                    <Productcard/>
                </div>
            </div>
        </section>
    );
};

export default Test;
