import './SCSS/App.css';
import routes from './routes'
import Header from './components/Header'
import Audio from './components/Audio'
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <div>
        <Header />
        <Audio />
      </div>
      {routes}
    </div>
  );
}

export default App;
