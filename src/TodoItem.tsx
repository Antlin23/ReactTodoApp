import React from "react";

interface ITodoItem {
    id: string;
    todoText: string;
    setTodos: React.Dispatch<React.SetStateAction<Array<{isCompleted: boolean, todoText: string, id:string}>>>;
  }


const TodoItem: React.FC<ITodoItem> = ({todoText, setTodos, id}) => {
    
    return(
        <div className="todo">{todoText} <button className="removeTodo" onClick={() => setTodos(
            x => x.filter(todo => todo.id !== id)
        )}>Delete</button></div>
    )
}

export default TodoItem
  