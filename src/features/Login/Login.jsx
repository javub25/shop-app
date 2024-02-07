import Firebase from "@features/Firebase/Firebase.jsx";
import React from "react";
import UserContext from "@features/Context/UserContext.jsx";
import {Input} from "@nextui-org/input";
import handleErrorMsg from "@features/Form/handleErrorMsg.jsx";
import SendData from "@features/Form/SendData.jsx"

const Login = () => 
{
    const app = Firebase();
    
    const setUsuario = React.useContext(UserContext);

    const [Register, setRegister] = React.useState(false);
    const [MessageError, setMessageError] = React.useState("");

    const Registering = () => 
    {
        setRegister(oldValue => !oldValue);
    }
    
    return (
            <main className="mt-10 mb-5 mx-auto w-[400px] mobile:w-full bg-white border-[#ffa8af] py-16 p-8 border-solid border-2 rounded-md">
                <h1 className="text-[40px] text-[#ff6f7b] mb-8">{Register ? "Crea una cuenta": "Iniciar sesión"}</h1>
                <form onSubmit={(e) => SendData(
                    {
                        event: e,
                        eventMsgError: handleErrorMsg,
                        changeMsgError: setMessageError,
                        changeUser: setUsuario,
                        registerState: Register,
                    })}>
                        
                    <Input type="text" id="email" variant={"underlined"} label="Email" 
                       classNames={{inputWrapper: "border-[#ffa8af]"}}       
                    />
                     <Input type="password" id="password" variant={"underlined"} label="Password" 
                        classNames={
                                    {inputWrapper: "border-[#ffa8af]", base: "pb-[14px]"}}         
                    />
                    <span className="text-sm text-red-400 py-[14px]">{MessageError}</span>
                    <br/><button className="text-[#213547] bg-[#ff8f98] mt-12 my-6 hover:scale-110 hover:border-0 text-balance" type="submit">{Register ? "Crea una cuenta de forma muy rápida": "Iniciar sesión"}</button>
                </form>
                <button className="text-[#213547] bg-[#ff8f98] hover:scale-110 hover:border-0 text-balance" onClick={() => Registering()}>{Register ? "¿Ya tienes cuenta? inicia sesión": "¿No tienes cuenta? Únete a nosotros"}</button> 
            </main>
    )
}
export default Login;