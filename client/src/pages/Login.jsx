import React from 'react'
import {Link} from "react-router-dom"; 
import {useHistory} from "react-router-dom"
import axios from "../axios"
import { useDispatch, useSelector} from "react-redux";

function Login() {

    let history = useHistory()
    const logAs = useSelector(state => state.logAs)
    const dispatch = useDispatch()

    const loginUser = async (event)=>{
        
        event.preventDefault()
        let email = event.target.email.value;
        let password = event.target.password.value;

        let data = {
            email : email,
            password : password
        }

        const login = await axios({
            method : "POST",
            url : "users/login",
            data : data
        })

        console.log(localStorage)
        localStorage.setItem('authAs' , login.data.data)
        if(login.status==200){
            dispatch({
                type:"AUTH_LOGIN",
                payload : {
                    token : login.data.token,
                    user : login.data.user
                }
            })
            history.replace("/main")
            localStorage.setItem("token",login.data.token)
        }  
    }


    return (
        <div className="flex flex-col justify-center  items-center fixed w-screen h-screen">
            <div>
            <form action="loginUser" onSubmit={loginUser} className="flex flex-col items-center">
                <input type="email" placeholder="Masukan Email . . ." name="email" className="bg-black bg-opacity-10 border-none w-80 drop-shadow-xl p-2 rounded-lg my-2"/>
                <input type="password" name="password" placeholder="Masukan Password . . ." className="bg-black bg-opacity-10 border-none w-80 drop-shadow-xl p-2 rounded-lg my-2"/>
                <button className="border-transparent bg-green-500 text-white w-28 text-l p-3 rounded-lg mt-6">
                    Masuk
                </button>
            </form>
            </div>
            <div className='pt-5'>
            <Link to="/register"><button className="text-sm mt-3 h-2">Belum punya akun?</button></Link>
            </div>
            
        </div>
    )
}

export default Login