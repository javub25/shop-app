import getProducts from "@api/getProducts";
import Pagination from "@features/Pagination/ModulPage.jsx"
import React from "react";

const Products = () => 
{
    const products = getProducts();
    const [page, setPage] = React.useState(0);

    return (
        <main>
            {
                products.length === 0 ?
                    <div className="lds-circle py-[50px]"><div></div></div>
                :
                <>
                    <header className="py-12 px-12 mobile:px-0">
                        <h1 className="text-[#ff6f7b] text-left mobile:text-center text-[23px] font-bold">Productos</h1>
                    </header>

                    <section className="grid grid-cols-2 gap-11 tablet:grid-cols-1">
                    {
                        /* The code `products[page].map((product => {...}))` is iterating over the
                        array of products at the current page index (`products[page]`). It is using
                        the `map` function to create a new array of JSX elements based on each
                        product in the `products[page]` array. */
                        products[page].map((product => 
                        {
                            return (
                                <>
                                <article key={product.id} className="place-items-center items-center grid grid-cols-2 mobile:grid-cols-1">
                                    <div>
                                        <img src={product.image} className="w-[120px] mobile:mb-8" alt={product.title}/>
                                    </div>
                                    
                                    <div>
                                        <span className="bg-black py-2 px-4 text-white text-sm">{product.category}</span><br/><br/>
                                        <h2 className="pb-2 font-bold text-base text-balance text-black">{product.title}</h2>
                                        <span className="text-[30px] text-[#ff6f7b] font-bold">{product.price} € </span>
                                    </div>    
                                </article>
                            </>
                            )
                        }))
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