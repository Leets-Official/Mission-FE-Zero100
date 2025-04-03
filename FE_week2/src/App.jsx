import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Category from './components/Category';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <Category />
      <TodoList />
    </div>
  );
}

export default App;
