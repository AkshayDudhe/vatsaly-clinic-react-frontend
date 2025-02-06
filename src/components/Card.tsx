export default function Card ({ name, title, testimony }: { name?: string, title?:string, testimony: string }) {
  return (
    <div className="shadow shadow-md bg-lime-50 p-3 rounded rounded-lg m-4">
      <div className="text-lg italic pb-3">
        {title}
      </div>
      <div className="whitespace-pre-line">{testimony}</div>
      <h3 className="text-md pl-5">{name && `- ${name}`}</h3>
    </div>
  )
}