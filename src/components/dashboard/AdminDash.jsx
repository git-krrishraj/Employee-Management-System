import React from 'react'
import Header from '../parts/Header'
import CreateTask from '../tasklist/CreateTask'
import AssignedTask from '../tasklist/AssignedTask'
import bg from '../../assets/bg.png'

const AdminDash = ({data,setcurrentUser}) => {
  return (
    <div className='p-6 ' style={{ backgroundImage: `url(${bg})`}}> 
        <Header data={data} setcurrentUser={setcurrentUser}/>
        <CreateTask data={data}/>
        <AssignedTask data={data}/>
    </div>
  )
}

export default AdminDash