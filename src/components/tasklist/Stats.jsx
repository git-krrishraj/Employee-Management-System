import React from 'react'

const Stats = ({data}) => {

  return (
    <div className='w-full flex justify-between mt-3'>
        <div className='w-[23%] h-40 bg-blue-600 rounded-4xl text-white p-6 shrink-0'>
            <h1 className='font-bold text-7xl'>{data.taskCounts.newTask}</h1>
            <h2 className='font-bold text-3xl' >New Tasks</h2>
        </div>
        <div className='w-[23%] h-40 bg-emerald-600 rounded-4xl text-white p-6 shrink-0'>
            <h1 className='font-bold text-7xl'>{data.taskCounts.completed}</h1>
            <h2 className='font-bold text-3xl' >Completed Tasks</h2>
        </div>
          <div className='w-[23%] h-40 bg-amber-500 rounded-4xl text-white p-6 shrink-0'>
            <h1 className='font-bold text-7xl'>{data.taskCounts.active}</h1>
            <h2 className='font-bold text-3xl' >Accepted Tasks</h2>
        </div>
          <div className='w-[23%] h-40 bg-rose-600 rounded-4xl text-white p-6 shrink-0'>
            <h1 className='font-bold text-7xl'>{data.taskCounts.failed}</h1>
            <h2 className='font-bold text-3xl' >Failed Tasks</h2>
        </div>
       
    </div>
  )
}

export default Stats