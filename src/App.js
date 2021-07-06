
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav.js';
import Card from './Card.js'

function App() {

  const [query, setQuery] = useState('')
const [url, setUrl] = useState(`https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&nojsoncallback=callback`)
  const [datas, setDatas] = useState([])

  useEffect(() => {
    async function fetchData() {
      console.log(url)
      await axios.get(url)
      .then(res => {
        console.log(res.data.items)
        setDatas(res.data.items)
      })
    }
    
    fetchData()
    
  }, [url])


  const showDatas = datas.length ? datas.map((data, index) => <Card media={data.media.m} key={index}></Card>) : <div className="no-data">No Data Found</div>

  return (
    <div className="App">
      <Nav/>
      <div className="container mx-auto py-5 ">
        <div className="d-flex justify-content-end align-items-center">
          
        <div className="d-flex align-items-center flex-end">
          <input type="text" value={query}  onChange={e => setQuery(e.target.value)} className="input-search me-2" placeholder="search here"/>
          <button className="btn-search" onClick={() => setUrl(`https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&nojsoncallback=callback&tags=${query}`)}>Cari</button>
        </div>
        
        </div>
        <span className="font-bold text-title">Image List :</span>
        <div className="row mt-4 text-center">
          {showDatas}
         
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
