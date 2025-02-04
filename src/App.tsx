import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AppointmentPage from './pages/AppointmentPage'
import Base from './pages/Base'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <Routes>
      <Route path='' element={<Base />}>
        <Route path='' element={ <HomePage /> } />
        <Route path='appointment' element={ <AppointmentPage /> } />
        <Route path='about' element={ <AboutPage /> } />
       </Route>
    </Routes>    
  )
}

export default App
