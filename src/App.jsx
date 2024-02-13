import './App.css'
import React, {Suspense, lazy} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Firebase from "@features/Firebase/Firebase.jsx";
import UserContext from "@features/Context/UserContext.jsx"
import {NextUIProvider} from "@nextui-org/system";
import Header from "@features/Header/Header.jsx"
import {Route} from "wouter";

/* The code is using the `lazy` function from React to dynamically import the components `Products`,
`Product`, `Login`, and `Home`. */
const Products = lazy(() => import("@features/Products/Products.jsx"));
const Product = lazy(() => import("@features/Products/SingleProduct.jsx"));
const Login = lazy(() => import("@features/Login/Login.jsx"));
const Home = lazy(() => import("@features/Home/Home.jsx"));


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
    <Header/>
      <NextUIProvider>
        {/*The `Suspense it is rendering a loading
        spinner with the class name "lds-circle". 
        This spinner will be displayed until the lazy-loaded components (`Products`, `Product`, `Categories`, `Login`, and `Home`)
        are fully loaded and ready to be rendered.*/}
        
        <Suspense fallback={<div className="lds-circle py-[50px]"><div></div></div>}>
          <Route path="/products" component={Products}></Route>
          <Route path="/product" component={Product}></Route>
            <UserContext.Provider value={
              [usuario, setUsuario]
            }>
            {usuario ? <Home /> : <Route path="/login" component={Login}></Route>
            }
            </UserContext.Provider>
        </Suspense>
      </NextUIProvider>
    </>
  )
}

export default App