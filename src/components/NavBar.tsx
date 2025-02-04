import { Link } from "react-router-dom"

export default function NavBar () {
  return (
    <nav className="sticky top-0 flex justify-between pt-2 pb-1 px-3 bg-green-600 text-white shadow shadow-lg">
      <div className="text-2xl mb-1">
        <Link to={''}>
          Vatsaly
        </Link>
      </div>
      <div className="fixed-top flex justify-between gap-4 mx-5">
        <Link to={'appointment'}>
          <button className="p-2 bg-orange-600 rounded-md hover:text-orange-200 hover:shadow-md">
          Book Appointment
          </button>
        </Link>
      </div>
    </nav>
  )
}