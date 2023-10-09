import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.css';
import Signup from './screens/Signup';

function App() {
  return (
   <div>
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
    </Routes>
  </Router>
   </div>
  );
}

export default App;
