// import React from 'react'
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">

    <h1 className="about_para1">
      At Atlasio, we bring the world closer to you.
    </h1>
    <h1 className="about_para2"> Whether you're a student, traveler, or just curious, we provide accurate, up-to-date, and easy-to-understand information about every country.
      Explore details like population, region, capital, currency, and languages — all in one place. Our goal is to make learning about the world simple, engaging, and reliable.
    </h1>
    <h1 className="about_para2"> Our platform is designed to be intuitive and user-friendly, giving you quick access to country information without unnecessary clutter. 
      With constantly updated data, you can trust that the facts you find here are accurate and reliable.</h1>
    <h1 className="about_para2">
      Discover, compare, and stay curious — with Atlasio, the world is at your fingertips.
    </h1>

    <h3 className="container-title">
      Here are some Interesting Facts, we're proud of!
    </h3>

    <div className="gradient-cards">
      {countryFacts.map((country) => {
        const { id, countryName, capital, population, interestingFact } = country;
        return (
          <div className="card" key={id}>
            <div className="container-card bg-blue-box">
              <p className="card-title">{countryName}</p>
              <p>
                <span className="card-description">Capital:</span>
                {capital}
              </p>
              <p>
                <span className="card-description">Population:</span>
                {population}
              </p>
              <p>
                <span className="card-description">Interesting Fact:</span>
                {interestingFact}
              </p>
            </div>
          </div>
        );
      })}
  </div>
  </section>
  )
}

export default About
