import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartslice" 

const Appstore = configureStore({
     reducer : {
        cart : cartReducer
     }
})
export default Appstore