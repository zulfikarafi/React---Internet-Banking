// import './App.css';
import Sidebar from "./component/sidebar"
import Topbar from "./component/topbar"
import Footer from "./component/footer"
import "../src/startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.min.css"
import "../src/startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.css"
import "../src/startbootstrap-sb-admin-2-gh-pages/vendor/fontawesome-free/css/all.min.css"
import { Outlet } from "react-router-dom"
// import React, {useState} from 'react'

 

function App() {
  return (

      <div id="wrapper" className="App">
      <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">   
            <Topbar/>
              <Outlet/>

          </div>
          <Footer/>
        </div>
      </div>  

  );
}


export default App;

// function App() {
//   const [joblist, setJoblist] = useState([]);

//     const fetchData = () => {
//         return fetch("http://127.0.0.1:5000/transaksi/history/1")
//             .then((response) => response.json())
//             .then((json)=> {
//                 console.log(json)
//                 setJoblist(json)
//             });
//     };

//     return (
//         <div>
//             Test<br/>
//             <button onClick={fetchData}>Fetch API</button>
//             <br/>
//             {JSON.stringify(joblist)}
//         </div>
//     );
// }

// export default App;