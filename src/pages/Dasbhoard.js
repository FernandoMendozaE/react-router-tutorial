import { Link, useNavigate, Outlet } from 'react-router-dom'

export default function Dasbhoard() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
      <button onClick={handleClick}>Logout</button>

      <br />
      <Link to="welcome">say welcome</Link>
      <br />
      <Link to="goodbye">say goodbye</Link>

      {/* // ? Permite pintar lo que contiene el componente subruta */}
      <Outlet />
    </div>
  )
}
