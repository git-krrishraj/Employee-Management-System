import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/login/Login'
import EmployeeDash from './components/dashboard/EmployeeDash'
import AdminDash from './components/dashboard/AdminDash'
import { setLocalStorage } from './utils/LocalStorage'
import { getLocalStorage } from './utils/LocalStorage'
import { useContext } from 'react'
import { Context } from './context/ContextProvider'
function App() {

  const [currentUser, setcurrentUser] = useState(null)
  const [loggedIn, setloggedIn] = useState(JSON.parse(localStorage.getItem('loggedInUser')))
    useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
    setcurrentUser(JSON.parse(localStorage.getItem('loggedInUser')).role)
    }
  },[currentUser])
  const loginHandler=(email,password)=>{
   
      const data={employees:JSON.parse(localStorage.getItem('employees')),admin:JSON.parse(localStorage.getItem('admin'))}
      let admin=data.admin.find(obj=>obj.email===email&&obj.password===password)
      let employees=data.employees.find(obj=>obj.email===email&&obj.password===password)
      if(admin)
      {
      console.log("This is an admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
      setloggedIn({role:'admin',data:admin})
      setcurrentUser('admin')
      }
      else if(employees)
      {
      console.log(employees)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employees}))
      setloggedIn({role:'employee',data:employees})
      setcurrentUser('employee')
      }
      else
      {
      alert("Inavlid Credentials")
      setcurrentUser(null)
      }
  }
  return (
    <>
      {(!currentUser)?<Login loginHandler={loginHandler}/>:''}
      {(currentUser==='employee')?<EmployeeDash data={loggedIn.data} setloggedIn={setloggedIn} setcurrentUser={setcurrentUser}/>:''}  
      {(currentUser==='admin')?<AdminDash data={loggedIn.data} setloggedIn={setloggedIn} setcurrentUser={setcurrentUser}/>:''}

    </>
  )
}

export default App
