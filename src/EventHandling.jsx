
function handleClick(){
  alert("You clicked me");
}
export default function EventHandling() {
  return (
    <button className="bg-indigo-500 m-5" onClick={handleClick}>Click me</button>
  )
}
