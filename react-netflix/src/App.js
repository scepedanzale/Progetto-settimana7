import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';


function App() {
  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
      <NavComponent/>
      <MainComponent/>
      <FooterComponent/>
      
    </>
  )
}

export default App;