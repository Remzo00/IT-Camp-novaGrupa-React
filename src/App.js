import './App.css';
import Button from './components/button/button';
import Footer from './components/footer';
import Header from './components/header';
import Input from './components/input/input';
import Main from './components/main';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
        <Button text={'Dodaj'} color={'red'} />
        <Button text={'Izbrisi'} color={'blue'} />
        <Button text={'Log in'} color={'green'}/>
        <Input />
    </div>
  );
}

export default App;
