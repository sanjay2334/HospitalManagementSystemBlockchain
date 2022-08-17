import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {

    const [regFormData,setRegFormData] = useState({
        fullname:"",email:"",password:"",confirmPassword:""
    })
    
    const [passerr,setPasserr] = useState('')   
    const [error,setError] = useState('')

    function isValidEmail(email){
        return /\S+@\S+\.\S+/.test(regFormData.email);
    }


    const handleChange = event =>{
        if(!isValidEmail(event.target.value)){
            setError('email is invalid')
            alert(error);
        }else{
            setError(null)
        }
        setRegFormData(prevdata=>{
            return{
                ...prevdata,
                [event.target.name]:event.target.value
            }
        })
    }


    const submit= async ()=>{
        if(regFormData.fullname === "" ,regFormData.email ==="",regFormData.password==="",regFormData.confirmPassword==="" ){
            alert("All feilds required")
        }else  if(regFormData.password !== regFormData.confirmPassword){
            alert("Password doesn't match")
        }
        else{
            try{
            // const user = await createUserWithEmailAndPassword(
            //     auth,
            //     regFormData.email,
            //     regFormData.password)
            // console.log(user)
            console.log(regFormData)
            // navigate.push('/login')
            alert("User Register");
            // window.location.reload(false)
        }catch(error){
            console.log(error.message);
            alert(error.message)
        }
        }
    }


    const Submit = ()=>{
        if(regFormData.fullname==="",regFormData.email==="",regFormData.password="",regFormData.confirmPassword===''){
            alert("All feilds are required")
        }// }else if(regForm.password !== regForm.confirmPassword){
        //     alert("Password is not matching")
        else {
            console.log(regFormData)
        }
    }

    return ( 
        <main className="flex items-center justify-center h-screen">
            <form>
                <div className="bg-white rounded shadow-sm w-96 p-6">
                    <h1 className="text-center text-5xl mb-10 font-sans font-semibold text-gray-600">Register</h1>
                    <label className="text-gray-700">Full Name</label>
                    <input 
                        type='fullname' 
                        className='w-full bg-gray-100 text-gray-500 outline-2 outline-black  mb-4 px-1 py-2'
                        placeholder="Full Name"
                        name="fullname"
                        onChange={handleChange}
                        value={regFormData.fullname}
                     /> 
                    <label className="text-gray-700">Email</label>
                    <input 
                        type='email' 
                        className='w-full bg-gray-100 text-gray-500 outline-2 outline-black  mb-4 px-1 py-2'
                        placeholder="Email.."
                        name="email"
                        onChange={handleChange}
                        value={regFormData.email}
                     />   
                    <label className="text-gray-700">Password</label>
                    <input 
                        type='Password' 
                        className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-2 mb-4 outline-black' 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={regFormData.password}
                    />
                    <label className="text-gray-700">Confirm Password</label>
                    <input 
                        type='Password' 
                        className='w-full py-2 bg-gray-100 text-gray-500 px-1 outline-2 mb-4 outline-black' 
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={regFormData.confirmPassword}
                    />
                    <button type="button" className="bg-dim-grey w-full text-gray-100 py-2 rounded hover:bg-silver-sand transition-colors" 
                        onClick={submit}
                    >Login</button>
                    <hr className="border-b-gray-50 mt-6 w-72 block mr-auto ml-auto mb-4" />
                    <h1 className="text-md text-center">Already have an Account - <Link to='/login' className="text-blue-400" >Login</Link></h1>
                </div>
            </form>
        </main>
     );
}
 
export default Register;