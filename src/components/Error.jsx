
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen bg-black text-center '> <h1 className= 'text-red-500 font-bold text-6xl '>Error </h1>
    <Link to = "/"><button className='bg-blue-400 p-2 rounded-lg text-white mt-5'>Go Home</button></Link>
    </div>
  )
}

export default Error