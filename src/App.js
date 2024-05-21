import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Login from './Components/Login';
import Movies from './Components/Movies';

function App() {
  return (
    <>
    <div className="max-h-fit min-h-screen bg-black ">
    <Header/>
    <Hero/>
    <Movies/>
    <Login/>
    </div>
    </>
  );
}


export default App;
