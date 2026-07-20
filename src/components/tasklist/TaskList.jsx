import React from 'react'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({userno,data}) => {
    console.log(data)
  return (
    <div className=' h-90 mt-7 w-full flex gap-3.5 overflow-scroll'>
        {
            data.tasks.map((elem,idx)=>{
                console.log(elem)
                if(elem.active)
                    return <ActiveTask key={userno*10+idx} data={elem}/>
                else if(elem.newTask)
                    return <NewTask key={userno*10+idx} data={elem}/>
                else if(elem.completed)
                    return <CompletedTask key={userno*10+idx} data={elem}/>
                else
                    return <FailedTask key={userno*10+idx} data={elem}/>
            })
        }
    </div>
  )
}

export default TaskList