import React from 'react';
import Link from 'gatsby-link'
import '../css/pages/homepage.scss'
import FloatIn from '../components/FloatIn'
import { applyClub, applyRequest, behanceClub, infoCLUB, liveCLUB, liveDECAL } from '../utils/links'
import Button from '../components/Button';

const floatContent = [
  [{ content: "Calling", dir: "left" }, { content: "/img/homepage/CALLING-ALL.png", dir: "bottom" }, { content: "all", dir: "right" }],
  [{ content: "creatives...", dir: "left", font: "IM Fell French Canon" }],
  [{ content: "/img/homepage/DESIGNER-SP.svg", dir: "left" }, { content: "designers", dir: "bottom", font: "Prophet" }, { content: "/img/homepage/DESIGNER-IMG.png", dir: "right" }],
  [{ content: "/img/homepage/PHOTOGRAPHER-IMG.png", dir: "left" }, { content: "photographers", dir: "bottom", font: "" }, { content: "/img/homepage/PHOTOGRAPHER-SP.svg", dir: "right" }],
  [{ content: "/img/homepage/DEVELOPER-SP.svg", dir: "left" }, { content: "developers", dir: "bottom", font: "Mondwest" }, { content: "/img/homepage/DEVELOPER-IMG.png", dir: "right" }],
]

function SectionTwo(props) {
  return (
    <div className="section__two">
      {props.content.map((row) => (
        <div className="g__flex__row" style={{ justifyContent: "center" }}>
          {row.map((item) => (
            <FloatIn
              content={item.content.startsWith("/") ?
                <img className="float__img" src={item.content} /> :
                <div className="l__text" style={{ fontFamily: item.font }}>{item.content}</div>}
              dir={item.dir}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

const bannerContent = [
  {
    title: "decals",
    img: "/img/homepage/DECALS-IMG.png",
    description: "We offer three student-led courses every semester to help beginners learn graphic design or photography principles.",
    to: "/decals"
  }, {
    title: "events",
    img: "/img/homepage/EVENTS-IMG.png",
    description: "We hold various semesterly events by inviting industry creative professionals.",
    to: "/events",
    flip: "true"
  }, {
    title: "extensions",
    img: "/img/homepage/EXTENSIONS-IMG.png",
    description: "We mentor and provide resources to help students at other universities start their own Innovative Design chapter.",
    to: "/extensions"
  },
]

function PageCard(props) {
  const banner = props.banner
  return (
    <div className="page__card">
      {banner.flip ?
        <div className="g__flex__row banner__row" >
          <p className="banner__desc"> {banner.description} </p>
          <img src={banner.img} className="banner__img" />
        </div>
        :
        <div className="g__flex__row banner__row" >
          <img src={banner.img} className="banner__img" />
          <p className="banner__desc"> {banner.description} </p>
        </div>
      }
      <div className="banner__title translate__y">
        <Link className="banner__title" to={banner.to}>
          {banner.title}
        </Link>
      </div>
    </div>
  )
}

function SectionThree(props) {
  return (
    <div className="section__three">
      {props.content.map((banner) => (
        <PageCard banner={banner} />
      ))}
    </div>
  )
}

// TODO
function SectionOne(props) {
  return (
    <div className="section__one">
      <div className="g__flex__col section__one__hero">
        <img className="join__us__svg" src="/img/homepage/front/join-us.svg" />
        <h2 style={{ fontFamily: "Sporting" }}>Lets make something together.</h2>
        <p>Innovative Design is UC Berkeley’s premier creative agency.
        We are designers, photographers, and web developers
                together in a mission to Make Berkeley Beautiful.</p>
      </div>

      <div className="home__button__wrapper">
        {/* <a className="home__button blue__sp21" href={liveDECAL} target="_blank">Watch DeCal Infosession</a> */}
        {/* <a className="home__button grey__sp21" href={behanceClub} target="_blank">See our work</a> */}
        {/* <a className="home__button grey__sp21" href={liveDECAL} target="_blank">Watch DeCal Infosession</a>
        <a className="home__button blue__sp21" href={infoCLUB} target="_blank">Club Infosession</a> */}
        <Button color="grey" href={behanceClub}>See our work</Button>
        <Button color="blue" href={applyRequest}>Request services</Button>
        {/* <Button color="blue" href={liveCLUB}>Watch Club Infosession</Button>
        <Button color="blue" href={"https://www.notion.so/Innovative-Design-Virtual-Office-Hours-60d0686f256e4beca958ed3cda7e4462"}>Office hours</Button> */}
      </div>

      <div className="graphics">
        <img id="rachel" src="img/homepage/front/rachel.svg" />
        <img id="computer" src="img/homepage/front/computer.svg" />
        <img id="bottom-left" src="img/homepage/front/bottom-left.svg" />
        <img id="bottom-right" src="img/homepage/front/bottom-right.svg" />
        <img id="top-right" src="img/homepage/front/top-right.svg" />
      </div>
    </div>
  )
}

export default function IndexPage(props) {
  return (
    <div className="g__flex__column total__wrapper">
      <SectionOne />
      <SectionTwo content={floatContent} />
      <hr className="vertical__line" />
      <SectionThree content={bannerContent} />
    </div>

  )
}