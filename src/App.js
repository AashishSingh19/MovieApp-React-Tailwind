import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Movies from './Components/Movies';

function App() {
  return (
    <>
    <div className="max-h-fit min-h-screen bg-black ">
    <Header/>
    <Hero/>
    <Movies/>
    </div>
    </>
  );
}


export default App;
