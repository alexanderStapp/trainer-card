import './App.css';
import routes from './routes'
import Header from './components/Header'
import Audio from './components/Audio'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Audio />
      </div>
      {routes}
    </div>
  );
}

export default App;
