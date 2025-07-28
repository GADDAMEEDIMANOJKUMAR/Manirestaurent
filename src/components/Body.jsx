/* eslint-disable react/jsx-key */
import { useEffect,useState } from "react"
import Card from "./card"
import { Link } from "react-router-dom"
// import Spinner from "./spinner"
import Shimmer from "./Shimmer"
import useOnline from "../utils/useOnline"

const Body = () =>{
    const [data,setData] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [dummy, setDummy] = useState([])
    const [resdata, setResdata] = useState()

    // console.log("below")
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    useEffect(()=>{
        try{
            const fetchData = async() =>{
                const res = await fetch(url)
                const out = await res.json()
                console.log(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
                setData(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
                setDummy(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
                setResdata(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.length)
            }
            fetchData()
        }
        catch(error){
            console.log(error)
        }


    },[])



    const handle = (e) => {
        const selected = e.target.value;
        console.log(selected);
        const result = (dummy.filter(item => item.info.avgRating >= selected ));
        setData(result)
        setResdata(result.length)
    
        // setData(data.filter(item => item.info.avgRating >= selected));
    }
    // useEffect(() => {
    //     setResdata(data.length)
    // }, [data])

    const input = (e) => {
      setSearchInput(e.target.value)
        
    }
    const search = () => {
        const res =dummy.filter(item => item.info.name.toLowerCase().includes(searchInput.toLowerCase()))
      setData(res)
      setResdata(res.length)
   }

    const refresh = () => {
        setData(dummy)
        setResdata(dummy.length)
    }
    
    const online = useOnline()
    if(online === false) return <div className="bg-black text-red-600 text-center pt-56 font-bold h-screen text-4xl">Netwok connection is Off please turn on your network</div>
    

    return (data.length === 0) ? <Shimmer/>: (
            <div className="mt-30">

         
            <button className="text-xl text-black-400 font-serif bg-black text-white bg-[url('/img/hero-pattern.svg')]  " onClick={handle}>Top Rating Restaurents</button>
            <div className="flex justify-center mt-32">
                <input type="text" name="search" id="name" className="p-2 border-black bg-blue-100 rounded-lg" onChange={input} placeholder="Search Restaurants"/>
                <button className="bg-blue-600 rounded-lg p-2 border-none text-white ml-3 " onClick={search}>Search</button>
                <button className="bg-blue-600 rounded-lg p-2 border-none text-white ml-3" onClick={refresh}> Refresh </button>
                <select className="bg-blue-100 p-2 rounded-lg ml-3" onChange={handle}>
                    <option value="4.5" selected>4.5</option>
                    <option value="4.0">4.0</option>  
                    <option value="3.5">3.5</option> 
                    <option value="3.0">3.0</option> 
                </select>
            </div>
            <div>
                <items/>
            </div>
            <h1 className="text-4xl text-center font-serif mt-10">Restaurants</h1>
            <p className="text-xl text-center font-serif mt-10 ">There is a <span className="text-4xl font-serif text-blue-600">{resdata}</span> Restaurents for you</p> 
           
            

            <div className="flex flex-wrap justify-center">
                

            { data.map(each =>
                 <Link to = {"/menu/" + each.info.id}> <Card key = {each.info.id} item = {each}/> </Link>
            )}
            </div>

            </div>
    )    
}
export default Body  