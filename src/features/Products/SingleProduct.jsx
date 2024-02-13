import React from 'react';
//We're gonna get access to state property ^wouter 3.0.0
import { useHistoryState } from "wouter/use-browser-location";
import arrowBack from "@assets/icons/arrow-badge-left.svg";


const SingleProduct = () => 
{
   /* The code is using the `useHistoryState` hook from the `wouter/use-browser-location` library to
   access the state property. */
    const state = useHistoryState();
    const product = state.productData; 
    //We manage how many items user wants based on a product
    const [quantity, setQuantity] = React.useState(1);
  
    //We need to control the countdown to know how many items users has selected
    const increaseQuantity = () => setQuantity(oldValue => oldValue + 1);
    const decreaseQuantity = () => setQuantity(oldValue => oldValue <= 1 ? 1 : oldValue - 1);
    
    return (
        <>
            <img src={product.image} className="w-40 mx-auto pt-[60px]"/>
            <h1 className="text-[#213547] text-2xl mt-[20px]">{product.title}</h1>
            <p className="text-[#213547] mt-[10px] text-base text-balance">
                {product.description}
            </p>
            <p className="text-[#213547] mt-[10px] text-[20px]">
                {product.price} €
            </p>
            <div className="flex justify-between items-center w-[90px] mx-auto mt-[25px] pb-[30px]">
                <button className="p-2 bg-[#ffc371]" onClick={decreaseQuantity}>
                    <svg stroke="#213547" fill="#213547" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="11px" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                </button>
                <span className="text-black">{quantity}</span>
                <button className="p-2 bg-[#ffc371]" onClick={increaseQuantity}>
                    <svg stroke="#213547" fill="#213547" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="11px" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                </button>
            </div>
            
            {/*We're gonna pass to card component product quantity that user wants to buy, image, title and price*/}
            <button className="rounded-md p-3 bg-[#ffc371] text-[#213547] hover:bg-[#ffcf8d]">
                Add to card
            </button>
            <a href="/products" title="Go to products" className="w-14 block pt-[30px]">
                <img src={arrowBack} className="w-14" alt="Go to products"/>
            </a>
        </>
    );
}

export default SingleProduct;