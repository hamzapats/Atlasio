import React from 'react';
import { useEffect,useTransition,useState } from 'react';
import { getCountryData } from '../api/postApi';
import CountryCard from "../components/Layout/CountryCard"
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {
  const [isPending, startTransition] = useTransition(); // lets you update the state without blocking the UI. 
  const [countries,setCountries] = useState([]);

  const [search,setSearch] = useState(); // both are used for buttons on top of the country flags: asc,desc,etc. 
  const [filter,setFilter] = useState("All"); // both are used in a component called: < SearchFilter />

  useEffect(() => {
    startTransition(async() => {
      const response = await getCountryData() // this is a fn. defined in "postApi.jsx"
      // console.log(response);
      setCountries(response.data);
    });
  }, []);

  if(isPending) return <h1>Loading...</h1>;



  // Now, to search each country by a substring:
  const searchCountry = (country) => {
    if(search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  // const filterRegion = (country) => {
  //   if(filter === "all") return country;
  //   return country.region === filter;
  // }

  const filterCountries = countries.filter(
    (country) => searchCountry(country) 
    // && filterRegion(country)
  );
  // Done searching..!



  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  )
}

export default Country
