import React, { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountries}) => {
    const [visited,setVisited] = useState(false)
    
    const handleVisite  = () =>{
        setVisited(visited? false : true); //works for visited non visited button
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited &&  'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>
            <p>Population :{country.population.population}</p>
            <p>Area: {country.area.area} <br /> {country.area.area>300000  ? "Big country": "Small country"}</p>
            <button onClick={handleVisite}>
                {visited ? 'Visited':'Not visited'}
            </button>
        </div>
    );
};

export default Country; 