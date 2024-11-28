
import './components/todo/todo.css'

import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
function App() {
  const name = "VuDinhQuy";
  const age = 21;
  return (
    <div className="todo-container" >
      <div className="todo-title">Todo List</div>
    
      <TodoNew
      name ={name}
      age = {age}/>
      <TodoData/>
      </div>
  )
}

export default App
