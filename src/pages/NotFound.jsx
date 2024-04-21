import NotFoundImg from "@assets/icons/NotFoundImg.svg";
import {CartContext} from "@features/Context/CartContext.jsx";
import React from "react";
import useLocalStorage from "@hooks/useLocalStorage.jsx";

const NotFound = () => 
{
    const [cart] = React.useContext(CartContext);
    useLocalStorage(cart);

    return(
        <div className="py-16 flex items-center tablet:flex-col-reverse mobile:flex-col-reverse">
            <div className="w-full lg:w-1/2 mx-8">
                <div className="text-7xl text-green-500 font-semibold font-extrabold mb-8">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                        Sorry we couldn't find the page you're looking for
                    </p>
                <a href="/" className="px-5 py-3 text-sm font-medium leading-5 shadow-lg text-white 
                    transition-all duration-400 border border-transparent rounded-lg 
                    focus:outline-none bg-green-600 
                    active:bg-green-500 hover:bg-green-500 hover:text-white">
                        Back to Homepage
                </a>
            </div>
            <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                <img src={NotFoundImg} className="w-96 mx-auto" alt="Page not found"/>
            </div>
        </div>
    )
}
export default NotFound;