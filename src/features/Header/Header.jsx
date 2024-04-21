import React from "react";
import login from "@assets/icons/login.svg";
import bars from "@assets/icons/bars.svg";
import cross from "@assets/icons/cross.svg";
import bagShop from "@assets/icons/shopping-bag.svg";
import {CartContext} from "@features/Context/CartContext.jsx";
import { ProductContext } from "@features/Context/ProductContext.jsx";
import getCategories from "@api/getCategories";

const Header = ({ onOpen }) => 
{
    const categories = getCategories();
    const [showNavMob, setshowNav] = React.useState(false);
    const [iconMob, setIconMob] = React.useState(bars);
    const [cart] = React.useContext(CartContext);
    const [, , setProductsList] = React.useContext(ProductContext);

    const handleNavMob = () => 
    {
        setshowNav(oldValue => !oldValue);
        setIconMob(showNavMob ? bars : cross);
    }
    const showCategories = (category) => setProductsList(oldValue => ({...oldValue, categories: category}))
    
    return (
        <header>
            <nav>
                <ul className="mobile:hidden flex justify-evenly items-center w-[400px] mx-auto">
                    <li>
                        <a href="/products" style={{color: "#213547"}} title="products"
                        className="hover:underline hover:decoration-[#ff6f7b]">
                            <h3 className="text-[#ff6f7b] text-base font-bold">Products</h3>
                        </a> 
                    </li>
                    <li>
                        <div className="relative w-full items-center mx-auto max-w-screen-sm">
                            <div className="relative group/bouton w-full">
                                <button className="py-3 pr-12 min-w-44 relative w-full">
                                    <h3 className="text-[#ff6f7b] text-base font-bold">Categories</h3>

                                    <span className="absolute flex items-center w-12 top-0 h-full right-[12%]">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="#000000" strokeLinecap="round" 
                                            strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </button>
                            
                                <ul className="absolute w-full bg-white top-full origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all shadow-xl">
                                    {categories.length > 0 && 
                                        categories.map((category, index) => <li key={index} className="font-bold py-4" onClick={() => showCategories(category)}>
                                            {/*We join the first capital letter and the rest words of each category*/}
                                            {category[0].toUpperCase() + category.slice(1)}</li>
                                        )                                     
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="relative">
                        {cart.length!==0 && 
                            <span className="absolute bg-[#ff6f7b] text-white flex justify-center rounded-xl text-[10px] w-[1.1rem] h-[1.1rem] top-[-0.5rem] right-[-0.7rem]">{cart.length}</span>
                        }
                        <img src={bagShop} alt="Shopping" onClick={onOpen}/>
                    </li>
                </ul>
                <ul className="hidden mobile:block">
                    <li>
                        <img src={iconMob} onClick={handleNavMob} alt="Icon Mob" className="w-7 h-full text-[#213547]"/>
                    </li>
                    
                    {showNavMob &&
                        <> 
                            <li className="pt-8 pb-2">
                                <div className="relative mx-auto">
                                    {cart.length!==0 && 
                                        <span className="absolute bg-[#ff6f7b] text-white flex justify-center rounded-xl text-[10px] w-[1.1rem] h-[1.1rem] top-[-0.5rem] right-[40%] mx-auto">{cart.length}</span>
                                    }
                                    <img src={bagShop} alt="Shopping" onClick={onOpen} className="mx-auto"/>
                                </div>
                            </li>
                            <li className="pt-8 pb-2">
                                <a href="/products" title="Products" className="hover:underline hover:decoration-[#ff6f7b]"> <h3 className="text-[#ff6f7b] text-base font-bold">Products</h3></a>
                            </li>
                            <hr/>
                            <li className="pt-4 pb-12">
                                <details className="group">
                                    <summary className="mx-auto w-[105px] flex justify-between items-center font-medium cursor-pointer list-none">
                                        <h3 className="text-[#ff6f7b] text-base font-bold">Categories</h3>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                    </summary>
                                    <ul className="p-4 shadow-xl">
                                        {categories.length > 0 && 
                                            categories.map((category, index) => <li key={index} className="font-bold py-4" onClick={() => showCategories(category)}>
                                                {/*We join the first capital letter and the rest words of each category*/}
                                                    {category[0].toUpperCase() + category.slice(1)}
                                                </li>
                                            )                                     
                                        }
                                    </ul> 
                                </details>
                            </li>
                        </>
                    }                    
                </ul>                
            </nav>
        </header>
        
    )
}
export default Header;