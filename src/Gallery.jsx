
import Profile from "./Profile"

export default function Gallery() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold py-4 text-2xl">Amazing Scientists</h1>
      <div className="flex space-x-3">
      <Profile/>
      <Profile/>
      <Profile/>
      </div>
    </div>
  )
}

