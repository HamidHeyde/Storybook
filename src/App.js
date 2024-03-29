import './app.css'
import {TodoApp} from './features/todoList';
import {CustomComponents} from './features/customComponents';

// todoList data
const todoList = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
    pinned: true,
    favorite: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    completed: false,
    pinned: false,
    favorite: true,
  },
  {
    id: 3,
    title: "Learn React Router",
    completed: true,
    pinned: false,
    favorite: false,
  },
]
const App = () => (
  <div className="appWrapper">
    <TodoApp todoList={todoList}/>
    <CustomComponents/>
  </div>
)

export default App;
