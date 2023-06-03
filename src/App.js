import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './pages/header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ParentComponent from './props/ParentComponent';

//npm i react-router-dom
//npm install axios
function App() {
  const [data, setData] = useState([])

  const fecthData = async () => {
    try{
      const response = await axios.get('https://fakestoreapi.com/products')
      setData(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fecthData()
  }, [])

//   {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }


  return (
    <div className='container'>
      <ParentComponent />
      {/* {data.map((product) => (
        <div>
          <img src={product.image} />
        </div>

      ))} */}
    </div>
  );
}

export default App;
