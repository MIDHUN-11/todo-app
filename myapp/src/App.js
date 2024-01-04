
import './App.css';
import Counter from './Counter';
import First from './First';

function App() {
  let name="midhun";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world </h1>
        <First props={name}/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
