// import logo from './logo.svg';
// import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Helloworld from './Helloword';
import Contact from './Routing/Contact';
import TechSupport from './Routing/TechSupport';
function App() {
  return (
    <div className="App">
     <Link to={"/contact"}>contact</Link><br/>
     <Link to={"/techsupport"}>techSupport</Link>
      <Helloworld/>
      <Routes>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/techsupport' element={<TechSupport/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
