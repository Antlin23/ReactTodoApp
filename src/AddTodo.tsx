import { useEffect, useState } from "react"

interface TodosProps {
    todos: Array<{isCompleted: boolean, todoText: string, id:string}>;
    setTodos: React.Dispatch<React.SetStateAction<Array<{isCompleted: boolean, todoText: string, id:string}>>>;
    newTodo: {isCompleted: boolean, todoText: string, id:string};
    setNewTodo: React.Dispatch<React.SetStateAction<{isCompleted: boolean, todoText: string, id:string}>>;
  }

const AddTodos: React.FC<TodosProps> = ({todos, setTodos, newTodo, setNewTodo}) => {
    const addTodo = () => {
        setTodos([...todos, newTodo]);

        setNewTodo({todoText: "", isCompleted: false, id: Date.now().toString()});
    }
    
return(
    <div>
        <section className="add container">
            <input value={newTodo.todoText} onChange={(e) => setNewTodo({todoText: e.target.value, isCompleted: false, id:Date.now().toString()})} id="addTodoInput" type="text" placeholder="Add todo"/>
            <button id="addTodoBtn" onClick={addTodo}>+</button>
            <button type="button" id="clearTodosBtn" onClick={() => setTodos([])}>Clear todos</button>
        </section>
    </div>
    )
}

export default AddTodos
  