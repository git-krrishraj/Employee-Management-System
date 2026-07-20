import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import { setLocalStorage } from './utils/LocalStorage.jsx'
setLocalStorage()
createRoot(document.getElementById('root')).render(

    <ContextProvider>
      <App />
    </ContextProvider>
)
