import React, { useContext } from 'react'
import { Context } from '../../context/ContextProvider'

const FailedTask = ({userno,data,setloggedIn}) => {
    const context=useContext(Context)
    const deleteHandler=()=>{
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        loggedInUser.data.tasks = loggedInUser.data.tasks.filter((task, i) => {
            if (task.id===data.id) {
                return false
            }
            else{
            return task
            }
        })
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        setloggedIn(loggedInUser)
        const prevEmployees=JSON.parse(localStorage.getItem('employees'))
        const updatedEmployees=prevEmployees.map((elem)=>{
            if(elem.id===userno)
            {
                return loggedInUser.data
            }
            else
                return elem
        })
        localStorage.setItem('employees',JSON.stringify(updatedEmployees))
        context.setuserData({employees:updatedEmployees,admin:context.userData.admin})

    }
  return (
    <div className='relative min-h-full w-100 bg-red-400 rounded-3xl shrink-0 p-6 flex flex-col gap-8 text-white'>
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
            <div className='absolute bottom-5 text-xl left-0 w-full box-border flex items-center justify-center h-5'>
                <button className='bg-blue-400 px-4 py-1 rounded-full hover:scale-115 hover:bg-blue-700 hover:text-amber-50' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
  )
}

export default FailedTask