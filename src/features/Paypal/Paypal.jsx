import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Paypal = (props) => 
{
    const paypalButtons = React.useRef();
        
    /**
     * The function `purchaseOrder` generates a purchase order object with intent, items, and total
     * amount details for a shopping cart in a React application
     */
    const purchaseOrder = () => 
    {
        return {
            intent: "CAPTURE", 
            purchase_units: [
                {
                    description: "Products",
                    //List of items details bought on shop
                    items: props.products.map((product => 
                    {
                        return {
                            unit_amount: {
                                currency_code: "EUR",
                                value: product.totalPrice.toFixed(2),
                            },
                            name: product.name,
                            quantity: 1,
                        }
                    })),
                    //Total Amount
                    amount: {
                        currency_code: "EUR",
                        value: props.price.toFixed(2),
                        breakdown: {
                            item_total: {
                                currency_code: "EUR",
                                value: props.price.toFixed(2)
                            }
                        }
                    }
                }
            ] 
        }
    }
    const getPurchaseUnit = purchaseOrder();

   /* The `React.useEffect()` hook in the provided code snippet is used to perform side effects in a
   functional component. In this case, it is responsible for setting up and rendering the PayPal
   payment buttons when the component mounts or when the `props.price` value changes. */
    React.useEffect(() => 
    {
        window.paypal.Buttons({
                style: {
                    shape: 'pill',
                    color: 'gold',
                },
                
    
                displayOnly: ["vaultable"],
                //launches the PayPal Checkout window. 
                createOrder: (data, actions, error) => 
                {
                    return actions.order.create(
                        getPurchaseUnit
                    )
                },
                onApprove: async (data, actions) => 
                {
                    await actions.order.capture();
                    toast.success("Payment Successful! 👌");
                },
    
                onError: () => 
                {
                    toast.error("Payment Declined! 🤯");
                }
            }
        ).render(paypalButtons.current)

        /*To avoid duplicate paypal buttons we'll create a cleanup function
        to delete them*/
        return () => 
        {
            if(paypalButtons.current)
            {
                paypalButtons.current.innerHTML = "";
            }
        } 
    }, [props.price])


    
    
    
    return (
        <div>
            <div className="pt-8" ref={paypalButtons}></div>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </div>
    )
}
export default Paypal;