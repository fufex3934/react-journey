export default function TodoList() {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="font-extrabold text-2xl py-2">Hedy Lamarr's Todos</h1>
      <img className="pb-3" src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />
      <ul className="list-disc">
        <li>Invent new traffic lights</li>
        <li>Reherse a movie scene</li>
        <li>Improve Spectrum technology</li>
      </ul>
    </div>
  );
}
