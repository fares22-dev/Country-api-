import Home from './Home.jsx'
import CountryPage from './CountryPage.jsx';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import NavBar from './NavBar.jsx';

function App( ){


    const [cont,setcont]=useState([])
    const [filteredcont,setfilteredcont]=useState(null)
    const [isloading,setisloading]=useState(true);
 

    useEffect(()=>{
     fetch("http://localhost:5173/data.json ")
     .then((response) => {
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json();
       })
       .then((data) => {
         setTimeout(() => {
     setcont(data)
     setfilteredcont(data)    
     setisloading(false);  
     
   }, 500);
       })
       .catch((error) => {
         console.error('There was a problem with the fetch operation:', error);
       });
     },[])
    
     

const[indx,setindx]=useState("");

const updateindx=(index)=>{
setindx(index)
}
    
    return (
    <div> 
<NavBar/>
<Router>
    <Routes>    
        <Route exact path="/Country-api-/"  element={<Home cont={cont} filteredcont={filteredcont} isloading={isloading} setfilteredcont={setfilteredcont} updateindx={updateindx}/>} />
        <Route  path="/country/:id" element={<CountryPage data={cont} indx={indx}/>}/>
    </Routes>
</Router>
</div>
     );
}
 
export default App;
