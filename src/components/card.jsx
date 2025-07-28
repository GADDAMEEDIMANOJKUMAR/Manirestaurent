/* eslint-disable react/prop-types */
import  {useState} from "react"
import imagelink from "../utils/imagelink"
const Card = (props) =>{
    const [isOpened, setIsOpened] = useState(false)
    //  console.log(props.item.info)
    const {name,avgRating,cloudinaryImageId,costForTwo} = props.item.info
    const {slaString} = props.item.info.sla
    const {opened}= props.item.info.availability
    const {locality,areaName} = props.item.info
    console.log(locality)
    const show = () =>{
        setIsOpened(!isOpened)
    }
    
    
    
        return(
            
            <div className={ opened ? "bg-blue-300 h-[330px] w-[250px] rounded-2xl p-4 m-5 text-white  hover:bg-gray-800 cursor-pointer" : "bg-red-100 h-[330px] w-[250px] rounded-2xl p-4 m-5 text-white  hover:bg-red-800 cursor-pointer"}>
                <img className="h-[150px] w-[250px] rounded-2xl hover:scale-95"  src={imagelink+cloudinaryImageId} alt="Idli" />
                <h3 className="text-xl hover:scale-105 font-bold ">{name}</h3>
                <p className="text-lg">Rating {avgRating}*</p>
                <p className="text-lg hover:text-red-500">{costForTwo}</p>
                {/* <p className="text-lg hover:scale-95"> location: {locality}</p> */}
                <p className="text-xl"> Delivery in {slaString}</p>
                <button onClick={show}>{isOpened ? "More" : "Less"}</button>
                {isOpened && <div> <p className="text-lg">Location: {locality}</p>
                <p className="text-lg">Area: {areaName}</p></div>}
            </div>
        )
}

export default Card

