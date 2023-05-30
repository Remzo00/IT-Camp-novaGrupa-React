import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './pages/header';

//npm i react-router-dom

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
    </Routes>
    </>
  );
}

export default App;
