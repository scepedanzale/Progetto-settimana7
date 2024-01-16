import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './pages/NavbarPage';
import FooterPage from './pages/FooterPage';
import HomePage from './pages/HomePage';
import TvShowsComponent from './components/TvShowsComponent'
import MovieDetailComponent from './components/MovieDetailComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsPage from './pages/SettingsPage';

function App() {
  const endpoint = 'http://www.omdbapi.com/?apikey=526860b7&s=';

  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
      <BrowserRouter>
        <NavbarPage/>
        <Routes>
          <Route path='/' element={<HomePage endpoint={endpoint}/>}/>
          <Route path='/tvshows' element={<TvShowsComponent endpoint={endpoint}/>}/>
          <Route path='/movie-detail/:movieID' element={<MovieDetailComponent endpoint={endpoint}/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    </>
  )
}

export default App;