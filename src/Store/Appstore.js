import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice" 

const Appstore = configureStore({
     reducer : {
        cart : cartReducer
     }
})
export default Appstore