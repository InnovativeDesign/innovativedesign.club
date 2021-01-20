import React from 'react';
import PageHeader from '../components/PageHeader'
import "../css/pages/decals.scss"
import { applyDecalAI, applyDecalGDP, applyDecalPHOTO, behanceDecalAI, behanceDecalGDP, behanceDecalPHOTO, behanceClub } from '../utils/links'

const widgetContent = [
  {          
    title: "Intro to Photoshop & Illustrator",
    src: "/img/decal/Photoshop-Decal.png",
    description: "In this class we teach the basics of how to use Adobe Illustrator and Photoshop. Don’t have it? Don’t worry! As a UC Berkeley student you have access to it for free. We also touch on the basics of graphic design and branding.",
    behance: behanceDecalAI,
    apply: applyDecalAI,
  },
  {          
    title: "Graphic Design Principles",
    src: "/img/decal/Graphic-Decal.png",
    description: "Already know Adobe Illustrator and Photoshop? Want to learn more about graphic Design? This class is perfect for you! We touch on a variety on styles and principles in this class. ",
    behance: behanceDecalGDP,
    apply: applyDecalGDP,
  },
  {          
    title: "Photography Principles",
    src: "/img/decal/Photography-Decal.png",
    description: "Always wanted to learn how to use a camera? Already know how to? Doesn’t matter! We will teach you how to shoot in manual and a variety of styles to go with it. This class is the perfect excuse to finally learn the settings on your camera and to broaden the way you think when you hold the camera.",
    behance: behanceDecalPHOTO,
    apply: applyDecalPHOTO,
  },

]

// props:
// src
// title
// description
// href
// TODO
function Widget(props) {
  const widget = props.widget
  return (
    <a className="decal__widget" href={widget.behance} target="blank">
      <img className="decal__widget__img" src={widget.src} />
      <div className="decal__widget__content">
        <h4 style={{minHeight: "2.5em"}}>{widget.title}</h4>
        <p style={{minHeight:"17em"}}>{widget.description}</p>
        {/* <a href={widget.apply} className="g__ex__link" target="_blank" style={{color: "black"}}>Apply &#x2192;</a> */}
        <a href="https://www.facebook.com/events/904436096958179" className="g__ex__link" target="_blank" style={{color: "black"}}>Infosession &#x2192;</a>
      </div>
    </a>
  )
}



export default function DecalsPage(props) {
  return (
    <div className="g__page__wrapper decals">
      <PageHeader 
        pageIndicator="DeCals"
        title="We host 3 DeCals every semester!"
        description="For those interested in graphic design, we offer the Intro to Photoshop & Illustrator and Graphic Design Principles Decal. 
        For those interestered in photography, we offer the Photography Principles DeCal. 
        We open applications at the beginning of each semester. "
      />
      <div className="g__flex__row decal__widget__wrapper">
        {widgetContent.map((widget) => (
          <Widget widget={widget}/>
        ))}
      </div>
    </div>

  )

}
