// * Importamos el módulo react-router-dom para poder usar las rutas
// ? BrowserRouter es un componente que nos permite navegar entre las diferentes rutas.
// ? Routes es un componente que nos permite definir las rutas.
// ? Route es un componente que nos permite crear una ruta especifica
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// * Importando las pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UserPage from './pages/UserPage'
import UsersPage from './pages/UsersPage'
import NotFoundPage from './pages/NotFoundPage'

// * Importando componentes
import Navbar from './components/Navbar'
import Dasbhoard from './pages/Dasbhoard'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* // ? path es la ruta que queremos que se muestre, element es el componente que queremos que se muestre */}

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate to={'/users'} />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/users/new" element={<p>New User</p>} />
        <Route path="/dasbhoard/*" element={<Dasbhoard />}>
          <Route path="welcome" element={<p>Welcom!!!</p>} />
          <Route path="goodbye" element={<p>GoodBye!!!</p>} />
        </Route>
        {/* // ? * es una ruta que no existe (paht="*") */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
