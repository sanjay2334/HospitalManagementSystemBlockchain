import { ethers } from "ethers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Metamask = () => {
    const {ethereum} = window;
    const navigate = useNavigate();

    useEffect(()=>{
        if(!window.ethereum) navigate('/install',{replace:true})
    },[])

    let account
    const connectWallet = async ()=>{
        const provider = new ethers.providers.Web3Provider(ethereum)
        await ethereum.request({method:'eth_requestAccounts'}).then(accounts=>{
            account=accounts[0]
            console.log(account);
        }
        )
        alert("connected")
        navigate('/login',{replace:true})
    }
    return ( 
            <div className="w-screen h-screen flex justify-end items-center">
                <h1 className="justify-start w-screen items-center text-5xl text-white ml-4">Connect to Wallet</h1>
                <div className="border-2  border-white p-10 w-72 h-72 m-9 rounded-md cursor-pointer bg-gradient-to-r from-dim-grey to-silver-sand hover:border-none" onClick={connectWallet}>
                    <div className="flex justify-center items-end h-28">
                        <h1 className="text-center text-3xl font-bold text-white">CONNECT</h1>
                    </div>
                </div>
            </div>
     );
}
 
export default Metamask;