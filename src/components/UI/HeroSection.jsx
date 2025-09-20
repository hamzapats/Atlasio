import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaLongArrowAltRight} from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            <NavLink to="/country">Start Exploring <FaLongArrowAltRight /> </NavLink>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <img 
            src="/images/world.png"
            alt="World is beautiful" className="banner-image"
          />
        </div>
      </div>
    </main>
  )
}

export default HeroSection
