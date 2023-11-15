import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css"

function App() {
  const todoItems = [
    {
      name : "Buy Milk",
      dueDate : "4/10/23"
    },
    {
      name : "Go to office",
      dueDate : "4/10/23"
    }
    
  ]
  return (
    <>
      <center >
       <Header></Header>
       <AddTodo></AddTodo>
       <TodoItems todoItems={todoItems}/>
       
       
      </center>
    </>
  );
}

export default App;
