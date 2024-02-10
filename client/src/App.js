import logo from './logo.svg';
import './App.css';
import Login from './components/Validation/Login';
import Register from './components/Validation/Register';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <>
 
<Router>
  <Routes>
    <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/> } />
  </Routes>
</Router>
    </>
  );
}

export default App;
