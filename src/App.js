import './App.css';
// import { Input } from './components/input.jsx';
import { TodoList } from './components/todolist.jsx';
import { Home } from './pages/home.jsx';
import { Profile } from './pages/profile.jsx';
import { Products } from './pages/products.jsx';
import { SPA } from './components/spa.jsx';


function App() {
  return(
    <div>
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Products /> */}
      <SPA />
    </div>
  )
}

export default App;
