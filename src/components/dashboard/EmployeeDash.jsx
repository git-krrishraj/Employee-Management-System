import React from 'react'
import Header from '../parts/Header'
import Stats from '../tasklist/Stats'
import TaskList from '../tasklist/TaskList'
import bg from '../../assets/bg.png'
const EmployeeDash = ({data,setcurrentUser,setloggedIn}) => {
  
  return (
    <div className='p-6' style={{ backgroundImage: `url(${bg})`}} >
        <Header data={data} setcurrentUser={setcurrentUser} setloggedIn={setloggedIn}/>
        <Stats data={data} setloggedIn={setloggedIn}/>
        <TaskList userno={data.id} data={data} setloggedIn={setloggedIn}/>
    </div>
  )
}

export default EmployeeDash