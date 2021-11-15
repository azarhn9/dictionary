
import logo from './l2.png';
import './App.css';
import Search from './Search';
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        
<img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Search />
      </main>
      <footer className="App-footer">
        <small>Coded by Azar Hosseininezhad</small>
      </footer>
      </div>
    </div>
  );
}

