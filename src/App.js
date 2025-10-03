import './App.css';
// import { Input } from './components/input.jsx';
// import { TodoList } from './components/todolist.jsx';
// import { Home } from './pages/home.jsx';
// import { Profile } from './pages/profile.jsx';
// import { Products } from './pages/products.jsx';
// import { SPA } from './components/spa.jsx';
// import { Effect } from './components/effect.jsx';
// import { API } from './components/API.jsx';
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import  Home  from './pages/home.jsx';
import  ProductDetails  from './pages/productDetails.jsx';
import  About  from './pages/about';
import  Contact  from './pages/contact.jsx';
import EditProfile from './pages/editProfile.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  NotFound  from './pages/notFound.jsx';
import  Navbar  from './components/navbar.jsx';
import "bootstrap-icons/font/bootstrap-icons.css"
import { createContext } from 'react';
import Cart from './pages/cart.jsx';


export const Data = createContext()

function App() {
  const [fname, setfName] = useState("Hamza");
  const [sname, setsName] = useState("Habib");
  const [email, setEmail] = useState("hamzahabib383@gmail.com");
  const [phone, setPhone] = useState("+92 1234567890");
  const [list,setlist] = useState([]);



    return(
    <Data.Provider value={{ fname, setfName, sname, setsName,email, setEmail, phone, setPhone,  list, setlist}}>
      <Router>
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<EditProfile/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/editProfile' element={<EditProfile/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </Data.Provider>
    
  )
}






export default App;
