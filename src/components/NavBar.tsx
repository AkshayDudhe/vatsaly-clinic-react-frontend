import { Link, useLocation } from "react-router-dom"

export default function NavBar () {
  const location = useLocation()
  console.log(location)
  return (
    <nav className="sticky top-0 flex justify-between pt-2 pb-1 px-3 bg-green-600 text-white shadow shadow-lg">
      <div className="text-2xl mb-1">
        <Link to={''}>
          Vatsaly
        </Link>
      </div>
      <div className="fixed-top flex justify-between gap-4 mx-5">
        <Link to={location.pathname === '/appointment' ? '' : 'appointment'}>
          <button className="p-2 bg-red-500 rounded-md hover:text-orange-200 hover:shadow-md">
          {location.pathname === '/appointment' ? 'Home' : 'Book Appointment'}
          </button>
        </Link>
      </div>
    </nav>
  )
}