import { useDispatch, useSelector } from "react-redux"
import imagelink from "../utils/imagelink"
import {addItem, decreaseItem,increaseItem } from "../Store/cartSlice"
// import Context from "../utils/Context"
// import { useContext } from "react"
import { useState } from "react"

const Itemlist = (props) => {
    // const [ quantity, setQuantity] = useState(1)
    const [show,setShow] = useState(false)

    const cartItems = useSelector(state=>state.cart.items)
    // console.log(props.items)
    const{items} = props

    const dispatch = useDispatch()
    
    const increment = (each) =>{
        dispatch(increaseItem(each))
        setShow(true)
    }
    // const decrement = () => {
    //    dispatch(decreaseItem())
    
    // }

    
    const handle = (each) =>{
        dispatch(addItem(each))
        setShow(true)
    }
    
    const remove = (each) => {
        dispatch(decreaseItem(each))
        setShow(true)
        console.log(dispatch(decreaseItem(each)))
    }

    // const{name,price,description} = props.items.card.info

//    items.map(each => console.log(each.card.info.itemAttribute.vegClassifier))

return (
    items.map(each => (
        <>
            <div className="flex justify-between my-8">
                <div className="w-9/12 text-left">
                    <span className="font-serif font-bold">{each.card.info.name}</span> <br/>
                    <span className="font-serif font-bold">₹{(each.card.info.price ? each.card.info.price : each.card.info.defaultPrice) / 100}</span>
                    <p className="font-serif font-bold">{each.card.info.description}</p>
                </div>
                <div className="w-3/12">
                    {each.card.info.imageId && <img className="h-[130px] w-[350px] rounded-xl" alt="image" src={imagelink + each.card.info.imageId} />}
                    <button className="p-1 bg-blue-200 rounded-lg" onClick={() => handle(each)}>
                        {show ? 
                        <div className="flex">
                            <span className="bg-blue-200 text-black p-2 font-bold hover:text-green-800 text-xl" onClick={() => increment(each)}>+</span>
                            <span className="p-2 text-black font-bold">{cartItems.length}</span>
                            <span className="bg-blue-200 p-2 text-black font-extrabold" onClick={()=>remove(each)}>-</span>
                        </div> : "ADD +"}
                    </button>
                </div>
            </div>
            <hr />
        </>
    ))
)
}

export default Itemlist