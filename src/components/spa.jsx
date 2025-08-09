import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { Navbar } from './navbar';
import { Home } from '../pages/home.jsx';
import { Profile } from '../pages/profile.jsx';
import { Products } from '../pages/products.jsx';

export const SPA = () => { 
    return (
    <div>
        <Router>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/products' element={<Products />}/>
                </Routes>
        </Router>
    </div>
    )
    }