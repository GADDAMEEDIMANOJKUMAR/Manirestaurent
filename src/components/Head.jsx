import logo_img from "../utils/logo"
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline"
import { useSelector } from "react-redux"

const Head = () =>{

    const online = useOnline()

    const cartItem = useSelector(state => state.cart.items)

    return(
        <div className="flex justify-between  shadow-lg bg-blue-200 fixed w-screen ">
            <Link to = "/"><img src= {logo_img} alt="logo" className="h-28 w-36 bg-opacity-40 rounded-full bg-transparent" /></Link>
            <div className="p-10">
                <Link className="m-6 text-lg">{online ? "Online🟢" : "Offline🔴"}</Link>
                <Link to ="/" className="m-6 text-lg font-bold  hover:bg-gray-600 hover:text-white rounded-xl p-2">Home</Link>
                <Link to ="/about" className="m-6 text-lg font-bold hover:bg-gray-600 hover:text-white rounded-xl p-2">About</Link>
                <Link to ="offers" className="m-6 text-lg font-bold  hover:bg-gray-600 hover:text-white rounded-xl p-2">Offers</Link>
                <Link to ="/help" className="m-6 text-lg font-bold  hover:bg-gray-600 hover:text-white rounded-xl p-2">Help</Link>
                <Link to ="/login" className="m-6 text-lg font-bold  hover:bg-gray-600 hover:text-white rounded-xl p-2">Sign in / Log in</Link>
                <Link to ="/cart" className="m-6 text-lg font-bold  hover:bg-gray-600 hover:text-white rounded-xl p-2">Cart {cartItem.length}</Link>
            </div>
        </div>
    )
}

export default Head