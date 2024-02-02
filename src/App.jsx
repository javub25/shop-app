import './App.css'
import React from "react";
import Login from "./features/Login/Login.jsx";
import Home from "./features/Home/Home.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Firebase from "./features/Firebase/Firebase.jsx";
import UserContext from "./features/Context/UserContext.jsx"
import {NextUIProvider} from "@nextui-org/system";

function App() {
  const app = Firebase();
  const [usuario, setUsuario] = React.useState(null)
  const auth = getAuth();
  
  /* The `React.useEffect` hook is used to perform side effects in a functional component. In this
  case, it is used to listen for changes in the authentication state using the `onAuthStateChanged`
  function from the Firebase authentication library. */
  React.useEffect(() => 
  {
    const userLogged = onAuthStateChanged(auth, (user => 
      {
        if(user)
        {
          setUsuario(user);
        }
      }))

      return () => userLogged() 
  }, [])

  return (
    <>
      <NextUIProvider>
        <UserContext.Provider value={
          [usuario, setUsuario]
        }>

        {usuario ? <Home /> : <Login />}  
      </UserContext.Provider>
      </NextUIProvider>
    </>
  )
}

export default App