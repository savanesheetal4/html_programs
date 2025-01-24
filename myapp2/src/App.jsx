// import About from "./components/About";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import './App.css'



// function Header(){
//   return(
//     <div>
//     <ul>
//       <h1>vasantdada patil college of engineering</h1>
//       <li><Link to="/home" style={{color: "white"}}>Home</Link></li>
//       <li><Link to="/about" style={{color: "white"}}>About</Link></li>
//       <li><Link to="/login" style={{color: "white"}}>Login</Link></li>
//     </ul>
//     </div>
//   )
// }


      {/* <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter> */}

      import { useEffect } from "react"
      function App() { 
        useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/users").then(
            response=>response.json()
          ).then(json=>console.log(json))
         },[])
          return (
          <div>     
           
          </div>
        )
      }
      export default App