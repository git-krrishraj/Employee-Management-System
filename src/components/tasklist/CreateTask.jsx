import React, { useContext, useState } from 'react'
import { Context } from '../../context/ContextProvider'
import AssignedTask from './AssignedTask'

const CreateTask = () => {
  const data = useContext(Context)
  const [taskTitle, settaskTitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [taskDesc, settaskDesc] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    const temp = JSON.parse(localStorage.getItem('employees'))
    const newTask = {
      id: crypto.randomUUID(),
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: taskTitle,
      taskDescription: taskDesc,
      taskDate: taskDate,
      category: "New Task",
    }
    temp.forEach((elem) => {
      if (elem.name === assignTo) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask++
      }
    });
    localStorage.setItem('employees', JSON.stringify(temp))
    data.setuserData({ employees: temp, admin: data.userData.admin })
    alert(`New task assigned to ${assignTo}`)
  }
  return (
    <form onSubmit={(e) => {
      submitHandler(e)
    }}>
      <div className='flex justify-between w-full items-center h-110 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg mt-6 text-slate-100'>

        <div className='w-1/2 h-full flex flex-col justify-between text-lg opacity-100'>
          <h3 className='text-2xl'>Task Title</h3>
          <input type="text" placeholder='Name of the task' className='w-2/3 h-10 p-3.5 rounded-lg border border-white/50 text-xl placeholder:text-slate-400' value={taskTitle} onChange={(e) => {
            settaskTitle(e.target.value)
          }} required />
          <h3 className='text-2xl'>Date</h3>
          <input type="date" className='w-fit border border-white/50 rounded-lg p-0.5 text-slate-300' value={taskDate} onChange={(e) => {
            settaskDate(e.target.value)
          }} required />
          <h3 className='text-2xl'>Assign to</h3>
          <select value={assignTo} className='w-2/3 h-10 pl-2 rounded-lg border border-white/50 text-xl text-slate-300 bg-slate-800' onChange={(e) => {
            setassignTo(e.target.value)
          }} required>
            <option className='' value='' disabled >Select the employee</option>
            {
              data.userData.employees.map((elem, idx) => {
                return <option value={`${elem.name}`} key={idx}>{elem.name}</option>
              })
            }
          </select>
          {/* <h3>Category</h3>
            <input type="text" placeholder='Design, Dev, Testing, etc' className='w-2/3 h-10 p-3.5 rounded-lg border-2 border-gray-600 text-xl' /> */}
        </div>
        <div className='flex flex-col justify-between w-1/2 h-full items-center'>
          <h3 className='text-xl'>Task Description</h3>
          <textarea name="taskDescription" id="taskDesc" className='w-4/5 h-2/3 p-3 border border-white/50' value={taskDesc} onChange={(e) => {
            settaskDesc(e.target.value)
          }} required></textarea>
          <button className='w-2/3 h-10 p-3.5 flex items-center justify-center text-lg hover:text-white bg-cyan-700
        hover:bg-cyan-500 hover:cursor-pointer hover:scale-105 text-white font-semibold rounded-full transition-all'>Create Task</button>
        </div>

      </div>
    </form>
  )
}

export default CreateTask