import './App.css';

import Cellphones from './components/Cellphones';

import Layout from './components/Layout';



function App() {

  const descriptions = [{

    "marca": "Xiaomi",

    "referencia": "NOTE 12 4+128GB",

    "img": "https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/r/e/redminote12gris01_1.jpg"

  },

  {

    "marca": "Apple",

    "referencia": "IP 15 PROMAX",

    "img": "https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/i/p/iphone15pronegro001_1.jpg"

  },

  {

    "marca": "Apple",

    "referencia": "IPHONE 11 128 GB LTE",

    "img": "https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/i/p/iphone11negro01_2.jpg"

  },

  {

    "marca": "Apple",

    "referencia": "IPHONE 13 128GB",

    "img": "https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/i/p/iphone14negro01_1_4.jpg"

  }]

  return (

    <div>

      <Layout />

      <Cellphones descriptions={descriptions} />

    </div>

  );

}



export default App;

