import React from 'react';
import Link from 'gatsby-link'
import '../css/pages/homepage.scss'


function SectionTwo(props) {
  function TagRow(props) {
    const tagRow = "g__flex__ row" + " " + "tag__row"
    return (
      <div className={tagRow}>
        {props.children}
      </div>
    )
  }
  return (
    <div className="section__two">
      {/* CALLING ALL */}
      <TagRow>
        <h2>Calling</h2>
        <img src="/img/CALLING-ALL.png" />
        <h2>all</h2>
      </TagRow>
      {/* CREATIVES */}
      <h2 style={{ fontFamily: "IM Fell French Canon" }}>creatives...</h2>
      <TagRow>
        <img src="/img/homepage/DESIGNER-SPARKLE.svg" />
        <h2 style={{ fontFamily: "Prophet" }}>designers</h2>
        <img src="/img/homepage/DESIGNER-IMG.png" />
      </TagRow>
      <TagRow>
        <img src="/img/homepage/PHOTOGRAPHER-IMG.png"/>
        <h2>photographers</h2>
        <img src="/img/homepage/PHOTOGRAPHER-SPARKLE.svg"/>
      </TagRow>
      <TagRow>
        <img src="/img/homepage/DEVELOPER-SPARKLE.svg"/>
        <h2 style={{fontFamily:"Minecraft"}}>developers</h2>
        <img src="/img/homepage/DEVELOPER-IMG.png"/>
      </TagRow>
    </div>
  )
}

function SectionThree(props) {
  
}

export default function IndexPage(props) {
  return (
    <div>
      <div className="g__page__wrapper">
        <div className="section__one">
          <div className="hero__text">Innovative Design is UC Berkeley’s premier creative agency.
          We are designers, photographers, and web developers
            together in a mission to Make Berkeley Beautiful.</div>
          <div className="home__button__wrapper">
            <Link className="home__button grey__sp21">See our work</Link>
            <Link className="home__button blue__sp21">Apply to join us</Link>
          </div>
        </div>
      </div>
      <SectionTwo />
    </div>

  )
}