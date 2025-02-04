import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { BACKEND_URL } from "../constants/constants";

export default function AppointmentPage () {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    note: ''
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setFormData((prevData) => { return { ...prevData, [e.target.name]: e.target.value }})
  }

  const submit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {  
      console.log(formData)
      // const res = await fetch("http://localhost:3000/bookAppointment", {
      const res = await fetch(`${BACKEND_URL}/bookAppointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json()
      console.log(formData, data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="w-full h-screen px-5 bg-lime-100">
      <div className="grid rows-1 h-3/4 pt-5 shadow shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center items-center bg-orange-200 hidden md:flex">
            <h1 className="text-center pb-5 text-2xl">Book Appointment</h1>
          </div>
          <div className="flex justify-center items-center bg-white">
          <div className="p-5 grid items-center">
            <form>
              <div className="grid grid-cols-2 gap-3">        
                <Input name='firstName' placeholder='First Name' onChange={handleChange} value={formData.firstName}/>
                <Input name='lastName' placeholder='Last Name' onChange={handleChange} value={formData.lastName} />
              </div>
              <Input name='email' placeholder='E-mail' type="email" onChange={handleChange} value={formData.email} />
              <Input name='mobile' placeholder='mobile no.' type="tel"  onChange={handleChange} value={formData.mobile} />
              <div className="shadow my-3 p-2 rounded-lg">
                <textarea name='note' placeholder='Description' className="w-full" onChange={(e) => handleChange(e)} value={formData.note}/>
              </div>
              <div className="">
              <Button onClick={e => submit(e)}/>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}