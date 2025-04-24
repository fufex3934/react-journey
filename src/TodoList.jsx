
export default function TodoList({person}) {
  return (
    <div style={person.theme} className="container mx-auto mt-4">
      <h1 className="font-extrabold text-2xl py-2">{person.name}'s Todos</h1>
      <img className="pb-3 rounded-full" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Hedy Lamarr" />
      <ul className="list-disc">
        <li>Invent new traffic lights</li>
        <li>Reherse a movie scene</li>
        <li>Improve Spectrum technology</li>
      </ul>
    </div>
  );
}
