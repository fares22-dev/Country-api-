import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CountryPage from './CountryPage.jsx';
import Countries from './Countries.jsx';
import Loader from './Loader.jsx'
import { Link } from 'react-router-dom';


const Home=({updateindx,cont,filteredcont,isloading,setfilteredcont})=> {
  
 
    
    
    const [inputValue, setInputValue] = useState('');
    
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searched = cont.filter((ele) => {
        return ele.name === inputValue;
      });
      if (searched.length===0){
        alert("Nothing Found")} else {
      }
      if(inputValue!==""){ setfilteredcont(searched)}
      else {setfilteredcont(cont)}
    
    }
  };
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
    
  };

  const handleDropdownSelect = (eventKey) => {
    const newshit = cont.filter((ele) => {
      return ele.region === eventKey;
    });
    if (eventKey!=="All"){setfilteredcont(newshit)
    }else{setfilteredcont([...cont]);}
    
  };



  return (
    <>
    <div className="containerr">
  
      <div className='searchnfilter' >
        <div className="searchbar">
          <img src="./images/search.svg"/>
          <input type="text" 
          className='searchfield'
          placeholder='search for country'   
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}/>
        </div>
        <div>
        <Dropdown onSelect={handleDropdownSelect}>
      <DropdownButton
        title="Filter by Region"
        id="dropdown-menu-align-responsive-1"
        className="float-lg-end"
      >
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Africa">Africa</Dropdown.Item>
        <Dropdown.Item eventKey="Americas">America</Dropdown.Item>
        <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
        <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
        <Dropdown.Item eventKey="Oceania">Oceania</Dropdown.Item>
      </DropdownButton>
    </Dropdown>
        </div>
      </div> 
      {isloading && <Loader/>}
    {filteredcont &&  <Countries updateindx={updateindx} cont={filteredcont}/>}
      
    </div>

    </>
  )
}

export default Home;
