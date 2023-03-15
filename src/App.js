import { useState, useEffect } from "react"
import Form from "./components/Form"
import Todolist from "./components/Todolist"

const getItems = () => {
  const items = localStorage.getItem("todos")
  return items ? JSON.parse(items) : []
}

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState(getItems())
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  useEffect(() => {
    setFilteredTodos(todos.filter(el => {
      if (status === "all") return el
      else if (status === "completed") return el.completed
      else return !el.completed
    }))
  }, [status, todos])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <section className="container">
      <header>
        <h1>Ahmed's todo list</h1>
      </header>
      <Form 
        inputText={inputText}   
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist 
        todos={todos}
        setTodos={setTodos}
        filtered={filteredTodos}
      />
    </section>
  );
}

export default App;