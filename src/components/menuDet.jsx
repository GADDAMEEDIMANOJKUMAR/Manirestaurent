/* eslint-disable react/prop-types */
import { useContext } from "react"
import Itemlist from "./Itemlist"
import Context from "../utils/Context"

const Menudetails = (props) =>{
    // console.log(props.item)

    const{msg} = useContext(Context)
    const {title, itemCards} = props.item.card.card
    const {showItem, setShow} = props
    
    const expand  = () =>{
        setShow()
    }
    console.log(showItem)
    
    return(
        <div className="bg-blue-400 my-7 w-6/12 p-5 mx-auto shadow-xl rounded-xl cursor-pointer" >
            <div className="flex justify-between " >
                <span className="font-serif font-bold text-xl text-gray-900 ">{title} ({itemCards.length})</span>
                <span  className=" rounded-xl" onClick={expand}>{showItem ? "🔼":"🔽"}</span> 
            </div>
            <p>{msg}</p>
                {
                    showItem && <Itemlist  items = {itemCards}/> 
                }
                
        </div>
    )
}
export default Menudetails