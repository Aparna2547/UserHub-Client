import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import UsersList from './Pages/User/UsersList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="userlist" element={<UsersList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
