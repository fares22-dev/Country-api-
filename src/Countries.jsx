import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = ({cont,updateindx}) => {
    
    return ( 
       <div className="maincontainer">
      {cont.map((item,index)=>(
         <div key={index} className="countrycard" >
          <Link className='link' to={"/country/"+item.alpha3Code}>
             <img src={item.flags.png}/>
             <h1 
             onClick={()=>{
                updateindx(item.name)
             }}
             >{item.name}</h1>
             <div className="info">
             <p>Population: {item.population}</p>
             <p>capital:{item.capital}</p>
             <p>Region:{item.region}</p>
             </div>
             </Link>
             </div>
      ))}
     </div>    
               
     );
}
 
export default Countries;