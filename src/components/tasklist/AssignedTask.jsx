import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
const AssignedTask = () => {
  const data = useContext(Context)
  console.log(data)
  return (
    <div className='w-full gap-5 rounded-2xl h-80 mt-10 overflow-auto flex flex-col'>
      <div className='w-full flex justify-between h-16 shrink-0 px-[5%] items-center rounded-lg text-2xl border-2 border-white-400 bg-gray-100' >
        <h3>Name</h3>
        <h3>New Tasks</h3>
        <h3>Active Tasks</h3>
        <h3>Completed Task</h3>
        <h3>Failed Task</h3>
      </div>

      <div className='w-full gap-3 h-80 overflow-auto flex flex-col'>
        {
            data.employees.map((employee,idx) => {
            console.log(employee)
             return <div className='w-full bg-slate-900 text-white flex justify-between h-16 shrink-0 items-center rounded-lg text-2xl' key={idx}>
              <h3 className='text-center w-[15%]'>{employee.name}</h3>
              <h3 className='w-[10%] '>{employee.taskCounts.newTask}</h3>
              <h3 className='w-[10%] '>{employee.taskCounts.active}</h3>
              <h3 className='w-[10%] '>{employee.taskCounts.completed}</h3>
              <h3 className='w-[10%] '>{employee.taskCounts.failed}</h3>
            </div>
          })
        }
        </div>
    </div>
  )
}

export default AssignedTask