import React, { useContext, useState } from 'react'
import { Context } from '../../context/ContextProvider'

const CreateTask = () => {
  const data=useContext(Context)
  const [taskTitle, settaskTitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [taskDesc, settaskDesc] = useState('')
  const [newTask, setnewTask] = useState({})
  const submitHandler=(e)=>{
    e.preventDefault()
    const data=JSON.parse(localStorage.getItem('employees'))
    console.log(data)
    setnewTask({ active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: taskTitle,
        taskDescription: taskDesc,
        taskDate: taskDate,
        category: "New Task",})
      console.log(newTask)
    data.forEach((elem) => {
      if(elem.name===assignTo)
      {
        elem.tasks.push(newTask)
      }
    localStorage.setItem('employees',JSON.stringify(data))
    });
  }
  return (
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
    <div className='flex justify-between w-full items-center h-110 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg mt-6'>
        
        <div className='w-1/2 h-full flex flex-col justify-between text-lg opacity-100'>
            <h3>Task Title</h3>
            <input type="text" placeholder='Name of the task' className='w-2/3 h-10 p-3.5 rounded-lg border-2 border-gray-600 text-xl' value={taskTitle} onChange={(e)=>{
              settaskTitle(e.target.value)
            }} required/>
            <h3>Date</h3>
            <input type="date" className='w-fit border-2 rounded-lg p-0.5' value={taskDate} onChange={(e)=>{
              settaskDate(e.target.value)
            }} required/>
            <h3>Assign to</h3>
            <select value={assignTo} className='w-2/3 h-10 pl-2 rounded-lg border-2 border-gray-600 text-xl' onChange={(e)=>{
              setassignTo(e.target.value)
              console.log(e)
            }} required>
              <option value='' disabled>Select the employee</option>
              {
                data.employees.map((elem,idx)=>{
                  return <option value={`${elem.name}`} key={idx}>{elem.name}</option>
                })
              }
            </select>
            {/* <h3>Category</h3>
            <input type="text" placeholder='Design, Dev, Testing, etc' className='w-2/3 h-10 p-3.5 rounded-lg border-2 border-gray-600 text-xl' /> */}
        </div>
        <div className='flex flex-col justify-between w-1/2 h-full items-center'>
            <h3 className='text-xl'>Task Description</h3>
            <textarea name="taskDescription" id="taskDesc" className='w-4/5 h-2/3 p-3 border-2' value={taskDesc} onChange={(e)=>{
              settaskDesc(e.target.value)
            }} required></textarea>
            <button className='w-2/3 h-10 p-3.5 rounded-full border-2 border-gray-600 flex items-center justify-center text-lg hover:bg-slate-900 hover:text-white'>Create Task</button>
        </div>
       
    </div>
     </form>
  )
}

export default CreateTask