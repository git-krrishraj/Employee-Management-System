import React from 'react'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({userno,data,setloggedIn}) => {
    console.log(data)
  return (
    <div className=' h-90 mt-7 w-full flex gap-3.5 overflow-scroll'>
        {
            data.tasks.map((elem,idx)=>{
                console.log(elem.id)
                if(elem.active)
                    return <ActiveTask key={elem.id} userno={userno} data={elem}  setloggedIn={setloggedIn}/>
                else if(elem.newTask)
                    return <NewTask key={elem.id} userno={userno} data={elem}  setloggedIn={setloggedIn}/>
                else if(elem.completed)
                    return <CompletedTask key={elem.id} userno={userno}data={elem} setloggedIn={setloggedIn}/>
                else
                    return <FailedTask key={elem.id} userno={userno} data={elem} setloggedIn={setloggedIn}/>
            })
        }
    </div>
  )
}

export default TaskList