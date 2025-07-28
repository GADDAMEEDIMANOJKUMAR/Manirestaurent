import useOnline from "../utils/useOnline"

const About = () =>{
    
    const online = useOnline()
    if(online === false) return <div className="bg-black text-red-600 text-center pt-56 font-bold h-screen text-4xl">Netwok connection is Off please turn on your network</div>

    return(
    <div className="bg-gray-700 flex items-center  justify-around h-screen">
        <img className="grayscale hover:grayscale-0" src="https://res.cloudinary.com/dn0v6bhw1/image/upload/v1732620060/MANOJ_yfnnxw.jpg"/>
        <div>
            <h1 className="font-serif text-4xl text-white">MANOJ KUMAR GADDAMEEDI</h1>
            <h2 className="font-serif text-4xl text-white text-center">M C A</h2>
        </div>
    </div>
    )
}
export default About