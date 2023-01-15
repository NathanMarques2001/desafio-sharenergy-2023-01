import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../templates/Login'
import RandomUsers from '../templates/Random-Users'
import HTTPCats from '../templates/HTPP-Cat'
import RandomDogs from '../templates/Random-Dog'
import Clients from '../templates/Clients'
import EditClient from '../components/Edit-Client'
import RegisterClient from '../templates/Register-Client'

export function PageRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Random-users" element={<RandomUsers />} />
          <Route path="/HTTP-Cats" element={<HTTPCats />} />
          <Route path="/Random-Dogs" element={<RandomDogs />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Edit-Client" element={<EditClient />} />
          <Route path="/Register-Client" element={<RegisterClient />} />
        </Routes>
      </Router>
    </>
  )
}
