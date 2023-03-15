import { AiFillPlusCircle } from "react-icons/ai"

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            { id: new Date().getTime().toString(), text: inputText, completed: false }
        ])
        setInputText('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="wrapper">
        <input 
            type="text" 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
            className="todo-input"
            />
        <button className="todo-button" type="submit">
            <AiFillPlusCircle />
        </button>
        </div>
        <div className="select">
            <select name="todos" onChange={(e) => setStatus(e.target.value)} className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">unCompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form