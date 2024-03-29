import './app.css'
import {TodoApp} from './features/todoList';
import {CustomComponents} from './features/customComponents';

const App = () => (
  <div className="appWrapper">
    <TodoApp/>
    <CustomComponents/>
  </div>
)

export default App;
