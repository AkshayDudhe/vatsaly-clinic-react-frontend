export default function Button({ text = 'Submit', onClick, type = 'submit' }: { text?: string, onClick: React.MouseEventHandler<HTMLButtonElement>, type?: "submit" | "reset" | "button" | undefined }) {
  const format = type === 'submit' ? 'bg-green-600' : 'bg-blue-300' 
  return (
    <button type={type} onClick={onClick}
      className={`w-full shadow shadow-md ${format} px-3 text-white py-2 rounded`} 
    >{text}</button>
  )
}