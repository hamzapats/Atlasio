import React, { useTransition,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryIndData } from '../../api/postApi';
import { NavLink } from 'react-router-dom';

const CountryDetails = () => {
  const params = useParams(); // By "console.log()" - we found out that
  // this is returning the id of each country, which we can use later!!

  const [isPending, startTransition] = useTransition(); // lets you update the state without blocking the UI. 
  const [country,setCountry] = useState();
  
  useEffect(() => {
    startTransition(async() => {
      const response = await getCountryIndData(params.id) // another fn. created in "postApi.jsx"
      // console.log(response); - check what this is providing, for future references..
      if(response.status === 200){
        setCountry(response.data[0]);
      }
    });
  }, []);
  
  if(isPending) return <h1>Loading...</h1>;


  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
            className="flag" src={country.flags.svg} alt={country.flags.alt}
            />
            <div className="country-content">
              <p className="card-title"> {country.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default CountryDetails
