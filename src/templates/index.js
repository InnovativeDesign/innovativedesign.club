import React, { useState, useRef, useEffect } from 'react';
import Link from 'gatsby-link'
import '../css/pages/homepage.scss'
import FloatIn from '../components/FloatIn'
import { flip } from 'lodash';

const floatContent = [
  [{content: "Calling", dir:"left"}, {content: "/img/homepage/CALLING-ALL.png", dir:"bottom"}, {content: "all", dir:"right"}],
  [{content: "creatives...", dir:"left", font: "IM Fell French Canon"}],
  [{content: "/img/homepage/DESIGNER-SP.svg", dir:"left"}, {content: "designers", dir:"bottom", font:"Prophet"}, {content: "/img/homepage/DESIGNER-IMG.png", dir:"right"}],
  [{content: "/img/homepage/PHOTOGRAPHER-IMG.png", dir:"left"}, {content: "photographers", dir:"bottom", font:""}, {content: "/img/homepage/PHOTOGRAPHER-SP.svg", dir:"right"}],
  [{content: "/img/homepage/DEVELOPER-SP.svg", dir:"left"}, {content: "developers", dir:"bottom", font:"Mondwest"}, {content: "/img/homepage/DEVELOPER-IMG.png", dir:"right"}],
]

function SectionTwo(props) {
  return (
    <div className="section__two">
      {props.content.map((row) => (
        <div className="g__flex__row" style={{justifyContent: "center"}}>
          {row.map((item) => (
            <FloatIn 
            content = {item.content.startsWith("/") ? <img src={item.content}/> : <h2 style={{fontFamily: item.font}}>{item.content}</h2>}
            dir = {item.dir}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function SectionThree(props) {
  return (
    <div className="section__three">
    </div>
  )
}

export default function IndexPage(props) {
  return (
    <div className="g__flex__column total__wrapper">
        <div className="g__page__wrapper">
          <div className="section__one">
            {/* <img src="/img/homepage/HERO-IMG.png"/> */}
            <div className="hero__text">Innovative Design is UC Berkeley’s premier creative agency.
            We are designers, photographers, and web developers
              together in a mission to Make Berkeley Beautiful.</div>
            <div className="home__button__wrapper">
              <Link className="home__button grey__sp21">See our work</Link>
              <Link className="home__button blue__sp21">Apply to join us</Link>
            </div>
          </div>
        </div>
      <SectionTwo content={floatContent}/>
      <hr className="vertical__line"/>
      <SectionThree />
    </div>

  )
}