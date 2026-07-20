import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='relative min-h-full w-100 bg-blue-400 rounded-3xl shrink-0 p-6 flex flex-col gap-8 text-white'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl bg-orange-400 px-2 py-1 rounded-xl'>New</span>
                <span className='text-xl'>{data.taskDate}</span>
            </div>
            <div>
                <h2 className='text-4xl'>{data.taskTitle}</h2>
            </div>
            <div className='overflow-scroll'>
                <p className='text-xl'>
                   {data.taskDescription}
                </p>
            </div>
            <div className='absolute bottom-5 text-xl left-0 w-full box-border flex items-center justify-center h-5'>
                <button className='bg-green-400 px-4 py-1 rounded-full hover:scale-105 hover:bg-green-700'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask