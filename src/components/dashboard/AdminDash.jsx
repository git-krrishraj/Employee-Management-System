import React, { useState } from 'react'
import Header from '../parts/Header'
import CreateTask from '../tasklist/CreateTask'
import AssignedTask from '../tasklist/AssignedTask'
import bg from '../../assets/bg.png'

const AdminDash = ({data,setcurrentUser}) => {

  return (
    <div className='p-6 min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800'> 
        <Header data={data} setcurrentUser={setcurrentUser}/>
        <CreateTask data={data}/>
        <AssignedTask data={data}/>
    </div>
  )
}

export default AdminDash