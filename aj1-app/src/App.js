import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"
import Convert from './component/Convert';

function App() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("/")
      .then(res => {
        setPost(res.data)
      })
  },[])

  if(!post) return null;

  return (
    <div className="App">
      {/* <header className="App-header">
        HelloWorld from React
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
      <header className="App-header">
        {/* HelloWorld from Server 
        {post}
      </header> */}
      <Convert />
    </div>
  );
}

export default App;
