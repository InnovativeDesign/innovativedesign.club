import React, { useState, useRef, useEffect } from 'react';
import Link from 'gatsby-link'
import '../css/pages/homepage.scss'
import FloatIn from '../components/FloatIn'


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
      {/* gotta be a better way to render this... */}
      <TagRow>
        <FloatIn content={<h2>Calling</h2>} dir="left" />
        <FloatIn content={<img src="/img/homepage/CALLING-ALL.png" />} dir="bottom" />
        <FloatIn content={<h2>all</h2>} dir="right" />
      </TagRow>
      {/* CREATIVES */}
      <h2 style={{ fontFamily: "IM Fell French Canon" }}>creatives...</h2>
      <TagRow>
        <img src="/img/homepage/DESIGNER-SPARKLE.svg" />
        <h2 style={{ fontFamily: "Prophet" }}>designers</h2>
        <img src="/img/homepage/DESIGNER-IMG.png" />
      </TagRow>
      <TagRow>
        <img src="/img/homepage/PHOTOGRAPHER-IMG.png" />
        <h2>photographers</h2>
        <img src="/img/homepage/PHOTOGRAPHER-SPARKLE.svg" />
      </TagRow>
      <TagRow>
        <img src="/img/homepage/DEVELOPER-SPARKLE.svg" />
        <h2 style={{ fontFamily: "Minecraft" }}>developers</h2>
        <img src="/img/homepage/DEVELOPER-IMG.png" />
      </TagRow>
    </div>
  )
}

// function SectionThree(props) {

// }

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function IndexPage(props) {
  return (
    <div>
      <div className="cunt">
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
      </div>
      <SectionTwo />
    </div>

  )
}