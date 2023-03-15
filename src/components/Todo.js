import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillTrashFill } from "react-icons/bs"

const Todo = ({ todo, todos, setTodos }) => {
    const { id, text, completed } = todo
    const deleteItem = () => {
        setTodos(todos.filter(el => el.id !== id))
    }
    const completeItem = () => {
        setTodos(todos.map(el => el.id === id ? { ...el, completed: !el.completed } : el))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${completed && 'completed'}`}>{text}</li>
            <button className="complete-btn" onClick={completeItem}>
                <AiFillCheckCircle />
            </button>
            <button className="trash-btn" onClick={deleteItem}>
                <BsFillTrashFill />
            </button>
        </div>
    )
}

export default Todo