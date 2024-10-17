import TodoItem from "./TodoItem";

interface ToddoListProps {
    todos: Array<{isCompleted: boolean, todoText: string, id:string}>;
    setTodos: React.Dispatch<React.SetStateAction<Array<{isCompleted: boolean, todoText: string, id:string}>>>;
  }


const AddTodos: React.FC<ToddoListProps> = ({todos, setTodos}) => { 
return(
    <section id="todoList" className="todo-list container">
        {todos.map((todo, index) => (
            <TodoItem key={todo.id} id={todo.id} todoText={todo.todoText} setTodos={setTodos}/>
        ))}
    </section>
    )
}

export default AddTodos
  