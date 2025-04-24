import Avatar from "./Avatar";
import Gallery from "./Gallery";
import List from "./List";
import PackingList from "./PackingList";
import TodoList from "./TodoList";
import Toolbar from "./Toolbar";

const person = {
  name: "Gregorio y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function App() {
  return (
    <>
      <Gallery />
      <TodoList person={person} />
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <PackingList />
      <List />
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
    </>
  );
}

export default App;
