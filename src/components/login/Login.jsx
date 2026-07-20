import React, { useState } from 'react'
import bg from '../../assets/bg.png'
const Login = ({loginHandler}) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        setEmail('')
        setPassword('')
        loginHandler(Email,Password)
    }
    return (
        <div className='h-screen bg-gray-200 flex items-center justify-center' style={{ backgroundImage: `url(${bg})`}}>
            <div className='h-[70%] shadow-xl shadow-slate-300/50 w-100 px-8 inset-shadow-sm bg-white rounded-2xl'>
                <form className='h-full flex flex-col items-center justify-around w-full' onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <h2 className='text-3xl text-slate-800'>Welcome Back!</h2>
                    <input type="text" placeholder='Email' className='w-full border-2 px-5 rounded-4xl py-2 text-xl border-slate-800 bg-white placeholder-slate-400' value={Email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <input type="password" placeholder='Password' className='w-full border-2 px-5 rounded-4xl py-2 text-xl border-slate-800 bg-white placeholder-slate-400' value={Password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <div className='flex justify-between w-full text-lg'>
                        <div className='gap-1 flex'>
                            <input id="rememberMe" type="checkbox" />
                            <label htmlFor="rememberMe" className='text-slate-600'>Remember Me</label>
                        </div>
                        <a href="" className='text-slate-600'>Forgot Password?</a>
                    </div>
                    <button className='w-[90%] h-fit cursor-pointer border-2 px-5 rounded-4xl py-1 text-xl hover:bg-slate-800 hover:text-white text-slate-800' >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login