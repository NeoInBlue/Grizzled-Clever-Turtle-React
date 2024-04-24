import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './member.css'

const Member = (props) => {
  return (
    <div className="member-container">
      <Helmet>
        <title>Member - Grizzled Clever Turtle</title>
        <meta property="og:title" content="Member - Grizzled Clever Turtle" />
      </Helmet>
      <div className="member-container1">
        <span className="member-text">MEMBER</span>
      </div>
      <Link to="/" className="member-navlink button">
        Home
      </Link>
      <div className="member-container2">
        <div className="member-container3">
          <img alt="image" src="/neored-500w.jpg" className="member-image" />
          <span>
            <span className="member-text02"> NeoInBlue</span>
            <br></br>
            <span className="member-text04"> </span>
            <span className="member-text05">CEO-Creator</span>
            <br></br>
          </span>
        </div>
        <div className="member-container4">
          <img alt="image" src="/unnamed-400h.jpg" className="member-image1" />
          <span>
            <span className="member-text08">   NelCraftLP</span>
            <br className="member-text09"></br>
            <span className="member-text10">Manager-Creator</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="member-container5">
        <img
          alt="image"
          src="/unben223annt-300h.jpg"
          className="member-image2"
        />
        <span className="member-text12">
          <span>GOLDANTI2009pol</span>
          <br></br>
          <span>        </span>
          <span className="member-text16">Creator-TGT</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Member
