import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/CountDown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let [address, setAddress] = useState('');
  let [todos, setTodos] = useState([
    { id: '1', title: 'sylas', type: 'demacia' },
    { id: '2', title: 'akali', type: 'noxus' },
    { id: '3', title: 'wukong', type: 'demacia' },
    { id: '4', title: 'talon', type: 'noxus' },

  ])

  const onTimeUp = () => {
    alert('time up')
  }

  const handleOnClickSave = (event) => {
    if (!address) {
      alert('missing infor')
      return;
    }
    let todo = { id: Math.floor(Math.random() * 10000), title: address, type: 'demacia' }
    setTodos([...todos, todo]);
    setAddress('')
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const handleDeleteTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(todo => todo.id !== id);
    setTodos(currentTodos);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/todo">
              <input type={'text'} value={address} onChange={(event) => { { handleOnChangeInput(event) } }} />
              <button type='button' onClick={(event) => { handleOnClickSave(event) }}>Save</button>
              <Todo
                todos={todos}
                title={`Eric's Todo`}
                handleDeleteTodo={handleDeleteTodo}
              />

              <Todo
                todos={todos.filter(todo => todo.type === 'demacia')}
                title={`Hung's Todo`}
                handleDeleteTodo={handleDeleteTodo}
              />
            </Route>
            <Route path="/count">
              <span>---------------</span>
              <CountDown
                onTimeUp={onTimeUp}
              />
              <span>---------------</span>
              <NewCountDown
                onTimeUp={onTimeUp}
              />
              <span>---------------</span>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id" exact>
              <DetailBlog />
            </Route>
            <Route path="/add-new-blog" exact>
              <AddNewBlog />
            </Route>
            <Route path="/secret">

            </Route>
          </Switch>



        </header>
      </div>

    </Router>
  );
}

export default App;
