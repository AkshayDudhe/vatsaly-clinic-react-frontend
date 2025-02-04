import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Base () {
  return (
    <div className='overflow-visible'>
      <NavBar />
      <Outlet />
    </div>
  )
}