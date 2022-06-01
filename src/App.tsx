import './App.css';
import AnimeFilter from './components/anime-filter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./anime.jpeg" className="App-logo" alt="logo" />
      </header>
      <AnimeFilter />
    </div>
  );
}

export default App;
