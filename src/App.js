import './App.css';
import Button from './components/button/button';
import Card from './components/card/card';
import Footer from './components/footer';
import Header from './components/header';
import Input from './components/input/input';
import Main from './components/main';
import Counter from './state/counter';

const cardData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card.',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the second card.',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the third card.',
  },
];

function App() {
  return (
    <div className="App">
        <Counter />
    </div>
  );
}

export default App;
