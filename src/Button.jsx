
export default function Button({onClick,children}) {
  return (
    <button className=" bg-blue-500 mr-2" onClick={onClick}>{children}</button>
  )
}
