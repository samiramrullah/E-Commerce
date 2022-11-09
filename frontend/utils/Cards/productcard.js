import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/Home.module.css';
const Productcard = ({ title, price, img, id }) => {
    console.log(title);

    return (
        <>
            <a href="https://www.kindacode.com"
                class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
                <img src={img} alt="Fiction Product"
                    class="h-36 object-cover rounded-tl-md rounded-tr-md" />
                <div class="px-3 py-2">
                    <h1 class="font-semibold">{title}</h1>
                    <p class="text-sm">${price}</p>
                </div>
            </a>
        </>

    )
}

export default Productcard