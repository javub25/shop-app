import getProducts from "@api/getProducts.jsx";
import Pagination from "@features/Pagination/ModulPage.jsx";
import React from "react";
import {Link} from "wouter";

const Products = () => 
{
    const products = getProducts();
    const [page, setPage] = React.useState(0);
    //Let's generate 10 uniqueUUID for each product page
    const uniqueUUID = Array.from({ length: 10 }, () => self.crypto.randomUUID());

    return (
        <main>
            <header className="py-12 px-12 mobile:px-0">
                <h1 className="text-[#ff6f7b] text-left mobile:text-center text-[23px] font-bold">Products</h1>
            </header>
            {
                products.length === 0 ?
                    <p className="text-black text-left pb-12 px-12 mobile:px-0">There aren't products in this page</p>
                :
                <>
                    <section className="grid grid-cols-2 gap-11 tablet:grid-cols-1">
                    {
                        /* The code `products[page].map((product => {...}))` is iterating over the
                        array of products at the current page index (`products[page]`). It is using
                        the `map` function to create a new array of JSX elements based on each
                        product in the `products[page]` array. */
                        products[page].map((product, i) => 
                        {
                            return (
                                <article key={uniqueUUID[i]}>
                                    <div className="place-items-center items-center grid grid-cols-2 mobile:grid-cols-1">
                                        <div>
                                            {/*In this case, it is creating a link
                                                to the "/product" route. When the link is clicked, it
                                                will navigate to the "/product" page and pass the
                                                `productData` object as state */
                                            }
                                            <Link href="/product" state={{ productData: product }}>
                                                <img width="120" height="346" fetchpriority="low" src={product.image} className="mobile:mb-8" alt={product.title}/>
                                            </Link>
                                        </div>
                                                                                
                                        <div>
                                            <span className="bg-black py-2 px-4 text-white text-sm">{product.category}</span><br/><br/>
                                            <h2 className="pb-2 font-bold text-base text-balance text-black">{product.title}</h2>
                                            <span className="text-[30px] text-[#ff6f7b] font-bold">{product.price} € </span>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                    </section>

                    <footer>
                        <Pagination 
                            pages={products.length} 
                            currentPage={page} 
                            setCurrentPage={setPage}
                        />
                    </footer>    
                </>
            }
            
        </main>
    )
}
export default Products;