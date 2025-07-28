import { useState, useEffect } from "react"
const useResMenu = (id) =>{
      
    const [menu,setMenu] = useState(null)
     
    const api = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.71820&lng=81.10410&restaurantId="
    
    useEffect( () =>{
        const fetchApi = async() =>{
            const res = await fetch(api + id)
            const data = await res.json()
            setMenu(data)
        }
        fetchApi()
        
    },[])

    return menu //--> custom hooks to creata file  write any fetchdata and states and import use it any component

        
    

}
export default useResMenu