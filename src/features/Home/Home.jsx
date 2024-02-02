import logOut from "../User/logOut.jsx"
import UserContext from "../Context/UserContext.jsx";
import React from "react";

const Home = () => {
    
    const [usuario, setUsuario] = React.useContext(UserContext);
    
    return (
        <>
            <h1 className="text-[40px] text-[#ff6f7b] mb-8">Bienvenido/a {usuario.email}</h1>
            <button className="bg-[#ff8f98] hover:scale-110 hover:border-0 text-balance" onClick={() => logOut(setUsuario(null))}>Cerrar sessión</button>
        </>
    )
}
export default Home;
