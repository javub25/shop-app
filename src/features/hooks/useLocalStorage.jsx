import React from "react";

const useLocalStorage = (cart) => 
{
    React.useEffect(() => 
    {
        localStorage.setItem("productsCart", JSON.stringify(cart));
    }, [cart]);
}
export default useLocalStorage;