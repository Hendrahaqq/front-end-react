
import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav.js'

function App() {

  // const [datas, setDatas] = useState([])

  useEffect(() => {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json')
    .then(res => {
      console.log(res.data)
    })
  })


  return (
    <div className="App">
      <Nav/>
      <div className="container mx-auto py-5 ">
        <div className="d-flex justify-content-between align-items-center">
          <span className="font-bold">Image List :</span>
        <div className="d-flex align-items-center flex-end">
          <input type="text" className="input-search me-2" placeholder="search here"/>
          <button className="btn-search">Cari</button>
        </div>
        
        </div>
        
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                something
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                something
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                something
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
