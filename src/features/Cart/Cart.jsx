import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/modal";
import cross from "@assets/icons/cross.svg";
import {CartContext} from "@features/Context/CartContext.jsx";
import Paypal from "@features/Paypal/Paypal.jsx"

const Cart = ({ isOpen, onClose } ) => {
     /*If we haven't found any product to cart it will display an empty array, which will show 
    the phrase your cart is empty*/
    const [cart, setCart, addProduct, removeProduct, removeCart, removeQuantityCart] = React.useContext(CartContext);
    let TempTotalPrice = 0;
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [checkout, Setcheckout] = React.useState(false);
    
    /**
     * The `ModalClose` function will hide paypal buttons whenever user has been 
     * clicke above cross modal icon
     * and will close the whole modal
     */
    const ModalClose = () => 
    {
        Setcheckout(false);
        onClose();
    }

    /* The `React.useEffect(() => {...}, [cart])` hook in the provided code snippet is used to update
    the total price of the items in the cart whenever the `cart` state changes. */
    React.useEffect(() => 
    {
        const modifyPrice = setTotalPrice(TempTotalPrice);

        return () => modifyPrice;
    }, [cart])
       
    return (
        <>
            <Modal isOpen={isOpen} onClose={ModalClose}
                backdrop="opaque"
                radius="lg"
                
                classNames={{
                wrapper: "p-4 [--scale-exit:0px]",
                header: "py-4 px-6 flex-initial pt-6 flex flex-col gap-1 text-gray-900 text-left text-lg font-semibold",
                body: "py-6 overflow-auto",
                backdrop: "z-50 bg-overlay/50 backdrop-opacity-disabled w-screen h-screen fixed inset-0 opacity-15",
                base: "my-auto flex flex-col relative z-50 w-full box-border bg-content1 outline-none mx-1 sm:mx-6 sm:my-16 max-w-md rounded-large shadow-small overflow-y-hidden my-auto",
                closeButton: "pt-4 text-[34px] text-[#213547]",
                }}>
                    
            <ModalContent className="overflow-auto">
                <>
                <ModalHeader className="flex flex-col gap-1 text-gray-900 text-left text-lg font-semibold">My Cart</ModalHeader>
                    <ModalBody>
                            {cart.length === 0 ?
                                <>  
                                    <h1 className="text-[#213547] text-2xl pb-[30px]">Your cart is empty.</h1>
                                    <a href="/products" className="text-center rounded-md p-4 bg-[#ffc371] text-[#213547] 
                                    hover:bg-[#ffcf8d] hover:text-[#213547] mb-[40px] w-[120px] mx-auto">
                                        Buy Now!
                                    </a> 
                                </>
                                : 
                                <>
                                    {cart.map((product, i)=> 
                                    {
                                        TempTotalPrice+=product.totalPrice;
                                        return (
                                            <ul>
                                                <li className="flex mobile:flex-col py-6 items-center mobile:items-start">
                                                    <div className="mobile:mx-auto p-4 overflow-hidden rounded-md border border-gray-200 relative">
                                                        <img src={product.image} alt={product.image} className="w-[55px] mx-auto"/>
                                                        <div className="top-0 right-0 absolute h-[20px] w-[20px] rounded-full bg-[#ffc371] transition-all duration-200"
                                                            onClick={() => removeProduct(setCart, product.id)}>
                                                                <img src={cross} alt="Delete product" className=" h-4 w-[12px] m-auto"/>
                                                        </div>
                                                    </div>

                                                    <div className="ml-4 mobile:pt-4">
                                                        <h3 className="text-gray-900 text-balance text-left text-base font-medium">
                                                            {product.name}
                                                        </h3>

                                                        <div className="pt-2 flex flex-1 items-center justify-between w-[150px] text-sm">
                                                            <button className="p-2 bg-[#ffc371]" onClick={() => removeQuantityCart(i, setCart)}>
                                                                <svg stroke="#213547" fill="#213547" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="11px" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                                                            </button>
                                                            <p className="text-gray-900">{product.quantity}</p>
                                                            <button className="p-2 bg-[#ffc371]" onClick={() => addProduct(product, cart, setCart)}>
                                                                <svg stroke="#213547" fill="#213547" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="11px" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                                                            </button>

                                                            <h3 className="text-gray-900 text-balance text-left text-base">
                                                                {parseFloat(product.totalPrice.toFixed(2))} €
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Every product will has horizontal line except the last one*/}
                                                {i!==cart.length - 1 && 
                                                    <li>
                                                        <hr className="text-[#213547]"></hr>
                                                    </li>
                                                }
                                            </ul>
                                        )
                                    })}

                                    

                                   
                                    <button className="text-sm text-center rounded-md p-[14px] bg-[#ffc371] text-[#213547] 
                                    hover:bg-[#ffcf8d] hover:text-[#213547] w-[190px] mx-auto font-medium" 
                                    onClick={() => removeCart(setCart)}>Remove Cart</button>

                                    <div className="mb-[30px] flex items-center justify-between border-b border-neutral-200 pb-1 pt-[2rem] dark:border-neutral-700">
                                        <p className="text-gray-900">Total</p>
                                        {/*It will returns 2 decimals*/}
                                            <p className="text-gray-900 text-right text-base">{parseFloat(TempTotalPrice.toFixed(2))} €</p>
                                    </div>

                                    <button onClick={() => Setcheckout(true)} className="mx-auto block w-[230px] rounded-full bg-[#ffc371] text-[#213547] hover:text-black hover:bg-[#ffcf8d] p-3 text-center text-sm font-medium">
                                        Proceed to Checkout
                                    </button>

                                  
                                    {checkout === true && 
                                        <Paypal 
                                            products={cart} 
                                            price={totalPrice}/>
                                    }
                                </>
                            }   
                    </ModalBody>
                </>
            </ModalContent>
            </Modal>
        </>
    );
}

export default Cart;