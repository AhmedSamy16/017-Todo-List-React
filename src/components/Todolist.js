import Todo from "./Todo"

const Todolist = ({ todos, setTodos, filtered }) => {
  return (
    <div className="todo-container">
        <ul className="todo-list">
            {filtered.map(todo => {
                return <Todo 
                    key={todo.id} 
                    todo={todo} 
                    todos={todos} 
                    setTodos={setTodos} 
                />
            })}
        </ul>
    </div>
  )
}

export default Todolist