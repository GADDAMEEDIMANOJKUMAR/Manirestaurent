import {lazy,Suspense} from "react"
import Body from "./components/Body";
import Head from "./components/Head";
// import About from "./components/About";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import Offers from "./components/offers";
// import Help from "./components/help";
import Error from "./components/Error";
import Resmenu from "./components/Resmenu";
import {createBrowserRouter,Outlet} from "react-router-dom"
import Context from "./utils/Context";
import Appstore from "./Store/Appstore";
import {Provider} from "react-redux"
// import { useState, useEffect } from "react";

const About  = lazy(() =>import ("./components/About"))
const Cart   = lazy(() =>import ("./components/Cart"))
const Login  = lazy(() =>import ("./components/Login"))
const Offers = lazy(() => import("./components/offers"))
const Help   = lazy(() =>import ("./components/help")) 

const App = () =>{

  // const{age,setAge} = useState("")

  // useEffect(()=>{
  //   const data = {
  //     age : 24
  //   }
  
  //   setAge(data.age)
  // })

  return (
    <Provider store = {Appstore}>
    <Context.Provider value = {{namess: "manoj"}}>
    
    <div>
      <Head/>
    
      <Outlet/>
    </div>  

    </Context.Provider>
    </Provider>

  )
}

const ReactRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/cart",
        element : <Suspense> <Cart/> </Suspense>
      },
      {
        path : "/login",
        element : <Suspense> <Login/> </Suspense>
      },
      {
        path : "/about",
        element : <Suspense> <About/> </Suspense>
      },
      {
        path : "/offers",
        element : <Suspense> <Offers/> </Suspense>
      },
      {
        path : "/help",
        element : <Suspense> <Help/> </Suspense>
      },
      {
        path : "/menu/:id",
        element : <Resmenu/>
      }
    
    ],
    errorElement : <Error/>
  }
])

export default ReactRouter
