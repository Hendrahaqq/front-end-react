
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav.js';
import Card from './Card.js'

function App() {

  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState(`https://api-hendra-node.herokuapp.com/get`)
  const [datas, setDatas] = useState([])

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      await axios.get(url)
      .then(res => {
        setDatas(res.data)
        setLoading(false)
      })
    }
    
    fetchData()
    
  }, [url])


  const showDatas = loading ? <div className="spinner-border mx-auto" role="status">

</div> : datas.length ? datas.map((data, index) => <Card media={data.media.m} key={index}></Card>) : <div className="no-data">No Data Found</div>

  return (
    <div className="App">
      <Nav/>
      <div className="container mx-auto py-5 ">
        <div className="d-flex justify-content-end align-items-center">
          
        <div className="d-flex align-items-center flex-end">
          <input type="text" value={query}  onChange={e => setQuery(e.target.value) } 
          onKeyUp = {() =>{ 
            setTimeout(() => {
              setUrl(`https://api-hendra-node.herokuapp.com/get?tag=${query}`)
            }, 1000)
          }
        }
          className="input-search me-2" placeholder="search here"/>
        </div>
        
        </div>
        <span className="font-bold text-title">Image List :</span>
        <div className="row mt-4 text-center">
          {showDatas}
         
        </div>

        <div className="col-12 mt-5 text-center">
          copyright 2021 - Hendra


        </div>
      </div>
      
      
    </div>
  );
}

export default App;
