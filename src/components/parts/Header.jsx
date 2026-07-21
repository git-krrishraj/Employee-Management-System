import React from 'react'

const Header = ({data,setcurrentUser}) => {
 
  return (
    <div className='w-full flex justify-between items-center p-4'>
        <h1 className='font-light text-4xl text-slate-400'>
            Welcome<br/><span className='font-medium text-5xl text-white'>{data.name}</span>
        </h1>
        <button className='text-2xl bg-red-500 px-4 py-2 h-fit rounded-3xl font-bold text-red-200 cursor-pointer hover:scale-115 hover:bg-red-700 hover:text-red-200 shadow-xl transition-all' onClick={()=>{
          localStorage.removeItem('loggedInUser')
          setcurrentUser('')
        }}>Log Out</button>
    </div>
  )
}

export default Header