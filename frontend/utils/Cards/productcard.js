import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/Home.module.css';
const Productcard = ({ title, price, img, id }) => {

    return (
        <>
            <div className=" relative">
                <div className=" bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1">
                    <p className=" text-white fonr-normal text-base leading-4">XS , S , M , L</p>
                </div>
                <div className="relative group">
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img className=" w-full object-cover" src={img} alt="A girl wearing white suit and googgles" />
                    <div className=" absolute bottom-0 p-8 w-full">
                        <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                        <Link href={`/productdetails/${id}`}>
                            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                        </Link>

                    </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{title}</p>
                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">${price}</p>
            </div>



        </>

    )
}

export default Productcard