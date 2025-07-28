import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onUsername = (event) => {
    setUsername(event.target.value);
    setError(""); // reset error when typing
    document.getElementById("name").style.border = "1px solid gray";
  };

  const onPassword = (event) => {
    setPassword(event.target.value);
    setError(""); // reset error when typing
    document.getElementById("password").style.border = "1px solid gray";
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Input validation
    if (username === "" || password === "") {
      setError("Username and Password are required");
      if (username === "")
        document.getElementById("name").style.border = "3px solid red";
      if (password === "")
        document.getElementById("password").style.border = "3px solid red";
      return;
    }

    // API call
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // store token
        navigate("/"); // redirect on success
      } else {
        setError(data.message || "Invalid login credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-slate-400 w-6/12 h-3/5 flex justify-center items-center rounded-xl shadow-xl hover:bg-slate-700 hover:text-white hover:shadow-red-800 sm:w-3/6 text-center mt-28">
        <div>
          <h1 className="font-serif text-2xl text-center mb-6">LOGIN FORM</h1>
          <form onSubmit={onSubmit}>
            <div className="my-5">
              <label htmlFor="name" className="font-serif mx-5 text-xl">
                USERNAME
              </label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={onUsername}
                className="h-[40px] w-[280px] rounded-xl text-black p-3"
              />
            </div>

            <div className="my-5">
              <label htmlFor="password" className="font-serif mx-5 text-xl">
                PASSWORD
              </label>
              <input
                type={show ? "text" : "password"}
                id="password"
                value={password}
                onChange={onPassword}
                className="h-[40px] w-[280px] rounded-xl text-black p-3"
              />
              <span
                className="cursor-pointer text-center bg-blue-200 text-black ml-5 p-3 rounded-xl hover:bg-blue-500 hover:text-white font-serif"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide" : "Show"}
              </span>
            </div>

            {error && <p className="text-red-600 font-bold my-3">{error}</p>}

            <div className="text-center my-5">
              <button
                type="submit"
                className="bg-blue-300 p-3 rounded-xl text-xl font-serif hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { useState } from "react"

// import {useNavigate} from "react-router-dom"

// const Login = () =>{
//   const[username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const[error,setError] = useState(false)
//   const[show,setShow] = useState(false)
//   const navigate = useNavigate();

//   const onUsername = (event) =>{
//     setUsername(event.target.value)
//   }

//   const onPassword = (event) =>{
//     setPassword(event.target.value)
//   }

//   const onSubmit = async (event) =>{
//     event.preventDefault()
//       if (username === "" || password === ""){
//         setError(true)
//       const inp = document.getElementById("name");
//       inp.style.border = "4px solid red"

//       const inp1 = document.getElementById("password");
//       inp1.style.border = "4px solid red"
//       }
//       else{
//         setError(false)
//       }

//       // Add your login logic here
//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Assuming the server returns a token or user data
//         localStorage.setItem("token", data.token);
//         navigate("/"); // Redirect to dashboard or another page
//       } else {
//         setError(true);
//         // Handle error message from server
//         console.error(data.message);
//       }
//     } catch (error) {
//       setError(true);
//       console.error("Error logging in:", error);
//     }
//     }

//     return(
//          <div className=" h-screen flex justify-center items-center">

//         <div className="bg-slate-400 w-6/12 h-3/5 flex justify-center items-center rounded-xl shadow-xl hover:bg-slate-700 hover:text-white hover:shadow-red-800 sm:w-3/6 text-center mt-28">
//           <div>
//               <h1 className="font-serif text-2xl text-center">LOGIN FORM</h1>
//               <form onSubmit={onSubmit}>

//               <div className="my-8">
//                 <label htmlFor="name" className="font-serif mx-5 text-xl">USERNAME</label>
//                 <input type="text" id="name" onChange={onUsername} className="h-[40px]  w-[280px] rounded-xl text-black p-3"   />
//                 {error && <p className="text-red-600 ml-40 font-bold">*Error message*</p> }
//               </div>

//               <div>
//               <label htmlFor="password" className="font-serif mx-5 text-xl">PASSWORD</label>
//               <input type= {show ? "text" : "password"} id="password" onChange={onPassword} className="h-[40px] w-[280px] rounded-xl text-black p-3" />
//               <span className="cursor-pointer text-center bg-blue-200 text-black ml-5 p-3 rounded-xl hover:bg-blue-500 hover:text-white font-serif sm:text-right" onClick={()=> setShow(!show)}>{show ? "Show" : "Hide"}</span>
//               {error && <p className="text-red-600 ml-40 font-bold">*Error message*</p> }

//               </div>

//               <div className="text-center my-5">

//               <button  type="submit" className="bg-blue-300 p-3 rounded-xl text-xl font-serif hover:bg-blue-600" > Submit</button>
//               </div>

//               </form>

//           </div>
//         </div>
//             {/* <div className="bg-white overflow-hidden">
//               <h1> name :{username}</h1>
//               <p> Password: {password}</p>
//               </div> */}
//        </div>

//     )
// }
// export default Login
