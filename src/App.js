import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import MovieScreen from './components/movieScreen/MovieScreen';
import Map from './components/mapScreen/Map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/map' element={<Map />} />
          <Route exact path='/movie' element={<MovieScreen />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
