import React from 'react'

const Header = ({data,setcurrentUser}) => {
 
  return (
    <div className='w-full flex justify-between items-center p-4'>
        <h1 className='font-light text-4xl'>
            Welcome<br/><span className='font-medium text-5xl'>{data.name}</span>
        </h1>
        <button className='text-2xl bg-red-200 px-4 py-2 h-fit rounded-3xl font-bold text-red-700 cursor-pointer hover:scale-105 shadow-xl' onClick={()=>{
          localStorage.clear()
          setcurrentUser('')
        }}>Log Out</button>
    </div>
  )
}

export default Header