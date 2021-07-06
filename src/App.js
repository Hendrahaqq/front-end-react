
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav.js';
import Card from './Card.js'

function App() {

  const [datas, setDatas] = useState([])

  useEffect((tag) => {
    axios.get(tag ? 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&nojsoncallback=callback&tag='+tag : 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&nojsoncallback=callback')
    .then(res => {
      console.log(res.data.items)
      setDatas(res.data.items)
    })
  }, [])


  const showDatas = datas.map((data) => <Card media={data.media.m} key={data.author_id}></Card>
  

  )

  return (
    <div className="App">
      <Nav/>
      <div className="container mx-auto py-5 ">
        <div className="d-flex justify-content-end align-items-center">
          
        <div className="d-flex align-items-center flex-end">
          <input type="text" className="input-search me-2" placeholder="search here"/>
          <button className="btn-search">Cari</button>
        </div>
        
        </div>
        <span className="font-bold text-title">Image List :</span>
        <div className="row mt-4">
          {showDatas}
         
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
