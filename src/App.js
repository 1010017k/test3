
import { Routes, Route} from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Signin from './pages/Signup';
import Singnup2 from './pages/Singnup2';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/Signup';

function App() {
  return (
   <Routes>
     <Route path="/" element={<SignUp/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signin/>}></Route>
     <Route path="/signup2" element={<Singnup2/>}></Route>
   </Routes>
  );
}

export default App;
