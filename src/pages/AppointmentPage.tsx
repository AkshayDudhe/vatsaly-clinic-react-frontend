import Button from "../components/Button";
import Input from "../components/Input";
import { useState, useRef, useEffect } from "react";
import { BACKEND_URL } from "../constants/constants";
import appointment from '../assets/appointment.jpg'

export default function AppointmentPage () {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    note: ''
  })
  const [notificationMessage, setNotificationMessage] = useState('')
  const [responseStatus, setResponseStatus] = useState(0)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setFormData((prevData) => { return { ...prevData, [e.target.name]: e.target.value }})
  }

  const timeoutRef = useRef<number | null>(null); // For storing the timeout ID to clear it on re-renders

  useEffect(() => {
    if (notificationMessage) {
      // Set the timeout to hide notification after 10 seconds
      timeoutRef.current = setTimeout(() => {
        setNotificationMessage("");
        setResponseStatus(0);
      }, 10000);
    }

    // Cleanup the timeout if the component unmounts or notificationMessage changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [notificationMessage]);

  const submit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      // const res = await fetch("http://localhost:3000/bookAppointment", {
      const res = await fetch(`${BACKEND_URL}/bookAppointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json()

      setResponseStatus(res.status)
      setNotificationMessage(data.message)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="w-full h-screen px-5 bg-lime-100">
      {notificationMessage && <div
  className={`fixed top-20 right-10 ${responseStatus === 200 ? 'text-green-600 bg-green-100' : 'text-red-500 bg-red-100'} px-4 py-2 rounded-lg shadow-lg transition-transform duration-500 ${
    notificationMessage ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  } cursor-pointer`}
  onClick={() => setNotificationMessage('')}
>
  {notificationMessage} <i className="pl-5 fa-solid fa-x fa-sm"></i>
</div>}
      <div className="grid rows-1 pt-5 shadow shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center items-center bg-orange-200 hidden md:flex">
            <img src={appointment} className="object-cover h-full w-full overflow-hidden"/>
          </div>
          <div className="flex justify-center items-center bg-white">
          <div className="p-5 grid items-center">
          <h1 className="text-center pb-5 text-2xl">Book Appointment</h1>
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