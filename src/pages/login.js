import { Link } from "react-router-dom";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Login = () => {

    const [formdata,setFormdata] = useState({
        email:"",password:""
    })

    const [error,setError] = useState('')

    function isValidEmail(email){
        return /\S+@\S+\.\S+/.test(formdata.email);
    }

    const handleChange = event => {
        if(!isValidEmail(event.target.value)){
            setError('Invalid Email')
        }
        else{
            setError(null)
        }

        setFormdata(prevData =>{
            return{
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    function Submit(){
        console.log(formdata)
    }

    return (
        <main className="flex items-center justify-center h-screen">
            <form>
                <div className="bg-white rounded shadow-sm w-96 p-6">
                    <h1 className="text-center text-5xl mb-10 font-sans font-semibold text-gray-600">Login</h1>
                    <label className="text-gray-700">Email</label>
                    <input 
                        type='email' 
                        className='w-full bg-gray-100 text-gray-500 outline-2 outline-black  mb-4 px-1 py-2'
                        placeholder="Email.."
                        name="email"
                        onChange={handleChange}
                        value={formdata.email}
                     />   
                    <label className="text-gray-700">Password</label>
                    <input 
                        type='Password' 
                        className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-2 mb-4 outline-black' 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formdata.password}
                    />
                    <button type="button" className="bg-dim-grey w-full text-gray-100 py-2 rounded hover:bg-silver-sand transition-colors" onClick={Submit}>Login</button>
                    <hr className="border-b-gray-50 mt-6 w-72 block mr-auto ml-auto mb-4" />
                    <h1 className="text-md text-center">Dont have an Account - <Link to='/register' className="text-blue-400" >Sign up</Link></h1>
                </div>
            </form>
        </main>
     );
}
 
export default Login;