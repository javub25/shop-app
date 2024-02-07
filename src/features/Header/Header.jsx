import React from "react";
import bars from "@assets/icons/bars.svg"
import cross from "@assets/icons/cross.svg"

const Header = () => 
{
    const [showNavMob, setshowNav] = React.useState(false);
    const [iconMob, setIconMob] = React.useState(bars);

    const handleNavMob = () => 
    {
        setshowNav(oldValue => !oldValue);
        setIconMob(showNavMob ? bars : cross);
    }
    return (
        <header>
            <nav>
                <ul className="mobile:hidden flex justify-evenly items-center w-[400px] mx-auto">
                    <li>
                        <a href="/products" title="productos">
                            <h3 className="text-[#ff6f7b] text-base font-bold">Productos</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/categories" title="categorias"> <h3 className="text-[#ff6f7b] text-base font-bold">Categorias</h3></a>                        
                    </li>
                    <li>
                        <a href="/login" style={{color: "#213547"}} title="Login">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        </a>
                    </li>
                </ul>
                <ul className="hidden mobile:block">
                    <li>
                        <img src={iconMob} onClick={handleNavMob} alt="Icon Mob" className="w-7 h-full"/>
                    </li>
                    
                    {showNavMob &&
                        <>
                             <li className="pt-8 pb-2">
                                <a href="/login" style={{color: "#213547"}} title="Login">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user mobile:mx-auto" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                                </a>
                            </li>
                            <li className="pt-8 pb-2">
                                <a href="/products" title="Productos"> <h3 className="text-[#ff6f7b] text-base font-bold">Productos</h3></a>
                            </li>
                            <hr/>
                            <li className="pt-2 pb-12">
                                <a href="/categories" title="Categorias">
                                    <h3 className="text-[#ff6f7b] text-base font-bold">Categorias</h3>
                                </a>                        
                            </li>
                        </>
                    }                    
                </ul>                
            </nav>
        </header>
    )
}
export default  Header;