import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='min-h-full w-100 bg-red-400 rounded-3xl shrink-0 p-6 flex flex-col gap-8 text-white'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl bg-orange-400 px-2 py-1 rounded-xl'>Failed</span>
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
        </div>
  )
}

export default FailedTask