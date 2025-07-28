import { createContext } from "react"

const Context = createContext({   // --> Context Api to create a data in  one file and use it globally and you can import any component and use it that data 
    msg: "Hi manoj"
})

export default Context