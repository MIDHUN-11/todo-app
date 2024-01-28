
import './App.css';
import Contact from './Contact';
import Counter from './Counter';
import First from './First';
import LifeCycle from './LifeCycle';
// import ListR from './ListR';
import ListRendering from './ListRendering';
import Uncontrolled from './Uncontrolled';
// import {Routes,Route, BrowserRouter} from 'react-router-dom';

function App() {
  let name="midhun";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world </h1>
        {/* <First props={name}/> */}
        {/* <Counter/> */}
        {/* <ListRendering/> */}
        {/* <LifeCycle/> */}
        {/* <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter> */}
        <Uncontrolled/>
      </header>
    </div>
  );
}

export default App;
