import Avatar from "./Avatar";
import Gallery from "./Gallery";
import TodoList from "./TodoList";


const person = {
  name:'Gregorio y. Zara',
  theme:{
    backgroundColor:'black',
    color:'pink'
  }
};

function App() {
  return (
    <>
     
      <Gallery/>
      <TodoList person={person}/>
      <Avatar  size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}/>
    </>
  );
}

export default App;
