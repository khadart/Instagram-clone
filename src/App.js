import './App.css';
import { Route ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Requests from './pages/Requests';
import UserDetails from './pages/UserDetails';
import Post from './pages/Post';
function App() {
  return (
    
    <><NavBar />
    <Routes>
      <Route path='/requests' element={<Requests/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/post/:id' element={<Post/>}/>
      <Route path="/:userName" element={<UserDetails/>}/>
    </Routes></>
    
  )
}

export default App;
