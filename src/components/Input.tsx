export default function Input ({name, placeholder, type = 'text', onChange, value}: {name: string, placeholder: string, type?: 'text'|'password'|'email'|'textarea'|'tel', onChange: React.ChangeEventHandler<HTMLInputElement>, value: any}) {
  return (
      <input {...{ name, placeholder, type, value, onChange }} className="shadow my-3 p-2 rounded-lg w-full"/>
  )
}