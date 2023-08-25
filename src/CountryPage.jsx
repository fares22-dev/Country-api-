import React, { useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import { useEffect } from 'react';


const CountryPage = ({data,indx}) => {
  const {id}=useParams()


const [Country,setcountry]=useState(null)


  const temp= data.filter((ele) => {
    return ele.alpha3Code === id;})
    console.log(data)
    console.log(temp[0])
    
    useEffect(
      ()=>{
         setcountry(temp[0])

      }
    )

    return (
      <div> 
        {data &&
        <div className="main">
    <Link classNme='link' to="/Country-api-/"><button className="backbtn"> <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png" /> Back</button></Link>
     <div className="infocontainer">
        {Country &&<div>    
        <img className='countryimg' src={Country.flags.png}/>
        <h1 className='countryname' >{Country.name}</h1>
            <p>Native Name : {Country.name}</p>
            <p>Population : {Country.population}</p>
            <p>Region: {Country.region}</p>
            <p>Sub Region: {Country.region}</p>
            <p>Capital: {Country.capital}</p>
           <p>Top Level Domain: {Country.topLevelDomain} </p>
            <p>Currencies: {Country.currencies[0].code}</p>
            <p>Languages: {Country.languages[0].name}</p>
          {
            Country.borders && 
            <div>
            <h2>Border Countires :</h2>
            <div className='bordesrcontainer' >
           {Country.borders.map(
            (border)=>(
              <Link className='link' to={"/country/"+border}><div className='borderr'>{border}</div></Link>
            )
              )} 
              </div>
              </div>
}
        </div>
    }
     </div>   
     </div>
}
     </div> 
    );
    
}
 
export default CountryPage;
