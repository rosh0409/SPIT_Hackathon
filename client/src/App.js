import './App.css';
import Login from './components/Validation/Login';
import Register from './components/Validation/Register';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Side from './components/Dashboard/Side';
import { Toaster } from "react-hot-toast";
// import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
<Router>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/> } />
  <Route path="/dash/*" element={<Dashboard />} />
  {/* <Route path="/*" element={<Side />} /> */}
  </Routes>
</Router>
<Toaster />
    </>
  );
}

export default App;
