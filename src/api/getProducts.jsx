import axios from 'axios';
import React from 'react';

const getProducts = () => 
{
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const request = () => 
        {
            axios.get("https://fakestoreapi.com/products")
            .then((res => {
                /* The code is dividing the response data into two halves. */
                const midpoint = Math.ceil(res.data.length / 2);
                const firstHalf = res.data.slice(0, midpoint);
                const secondHalf = res.data.slice(midpoint);
                setProducts([firstHalf, secondHalf]);
            }))
            .catch((error) => {
                throw new Error (error);
            })
        }
        return () => request();
    }, [])

    return products;
}
export default getProducts;