import React, { useContext } from 'react'
import { Context } from '../../context/ContextProvider'

const ActiveTask = ({userno,data,setloggedIn}) => {
    const context=useContext(Context)
    const failedHandler=()=>{
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        loggedInUser.data.taskCounts.active--
        loggedInUser.data.taskCounts.failed++
        loggedInUser.data.tasks = loggedInUser.data.tasks.map((task, i) => {
            if (task.id === data.id) {
                return { ...task, active: false, failed: true }
            }
            return task
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
    const completeHandler=()=>{
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        loggedInUser.data.taskCounts.active--
        loggedInUser.data.taskCounts.completed++
        loggedInUser.data.tasks = loggedInUser.data.tasks.map((task, i) => {
            if (task.id === data.id) {
                return { ...task, active: false, completed:true }
            }
            return task
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
    <div className='relative min-h-full w-100 bg-amber-500 rounded-3xl shrink-0 p-6 flex flex-col gap-8 text-white'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl bg-orange-600 px-2 py-1 rounded-xl'>Active</span>
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
            <div className='absolute bottom-5 text-xl left-0 w-full box-border flex items-center justify-evenly h-5'>
                <button className="bg-rose-600 hover:scale-110 hover:bg-red-700 px-3 py-1 rounded-full transition-all" onClick={failedHandler}>Mark as failed</button>
                <button className="bg-emerald-600 hover:scale-110 hover:bg-green-700 px-3 py-1 rounded-full transition-all" onClick={completeHandler}>Mark as completed</button>
            </div>
        </div>
  )
}

export default ActiveTask