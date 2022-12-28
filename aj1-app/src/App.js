// import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"

// const baseURL = "http://localhost:8080/"
// const baseURL = "http://13.231.224.242:8080/"

function App() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    // axios.get(baseURL)
    //   .then(res => {
    //     setPost(res.data)
    //   })
    axios.get('/')
      .then(res => {
        setPost(res.data)
        console.log("inner axios/get");
        console.log(res.data);
      })
  },[])

  if(!post) return null;

  return (
    <div className="App">
      <header className="App-header">
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
        </a> */}
      </header>
      <header className="App-header">
        {/* HelloWorld from Server */}
        {post}
      </header>
    </div>
  );
}

export default App;
