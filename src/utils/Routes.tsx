import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../layout/Navbar'
import Login from '../templates/Login'
import RandomUsers from '../templates/Random-Users'
import HTTPCats from '../templates/HTPP-Cat'
import RandomDogs from '../templates/Random-Dog'
import Clients from '../templates/Clients'

export function PageRoutes() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Random-users" element={<RandomUsers />} />
          <Route path="/HTTP-Cats" element={<HTTPCats />} />
          <Route path="/Random-Dogs" element={<RandomDogs />} />
          <Route path="/Clients" element={<Clients />} />
        </Routes>
      </Router>
    </>
  )
}
