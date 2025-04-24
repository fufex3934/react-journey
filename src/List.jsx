import { people } from "./data"
import { getImageUrl } from "./utils"
export default function List() {
  const listItems = people.map(person=>
    <li key={person.id} className="grid grid-cols-1 sm:grid-cols-2">
      <img className="rounded-full py-2" src={getImageUrl(person)} alt={person.name} />

      <p >
        <b>{person.name}:</b>
        {' ' + person.profession + ''}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article className="container mx-auto mt-5">
      <h1 className="font-extrabold text-2xl">Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  )
}
