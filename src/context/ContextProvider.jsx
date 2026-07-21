import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
export const Context=createContext()
const ContextProvider = ({children}) => {
  const [userData, setuserData] = useState(null)
  useEffect(()=>{
    const {employees,admin}=getLocalStorage()

    setuserData({employees,admin})
  },[])
  return (
    <div>
      <Context.Provider value={{userData:userData,setuserData:setuserData}}>
        {children}
      </Context.Provider>
      
    </div>
  )
}

export default ContextProvider