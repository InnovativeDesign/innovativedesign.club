import React from 'react';
import Link from 'gatsby-link'
import PageHeader from "../components/PageHeader"
import "../css/pages/clients.scss"
import { behanceClub, behanceDecalPHOTO } from '../utils/links'

const serviceContent = [
  {
    title: "Design",
    description: "Our design teams are experienced with logo, rebranding, flyer, pamphlet, poster, or sticker design. ",
    img: "/img/homepage/DESIGNER-SP.svg",
  },
  {
    title: "Photography",
    description: "Our photography teams are experienced with photographing events, portraits, landscapes, or studio shoots.",
    img: "/img/homepage/PHOTOGRAPHER-SP.svg",
  },
  {
    title: "Web Development",
    description: "Our web teams are experienced with helping design interfaces and then develop the web or mobile application.",
    img: "/img/homepage/DEVELOPER-SP.svg",
  },
]


function Services(props) {
  function ServiceWidget(props) {
    const service = props.service
    return (
      <div className="g__flex__col service__widget" >
        <img src={service.img} />
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    )
  }
  return (
    <div className="g__flex__row service__row">
      {props.content.map((service) => (
        <ServiceWidget service={service} />
      ))}
    </div>
  )
}

const processContent = [
  {
    num: "01",
    title: "Submit a design request",
    description: "The first part of the process is filling out the design request form where you will provide basic contact information, basic information about your organization, and a brief summary of your creative project.",
    // button: "View application",
    // href: "",
  },
  {
    num: "02",
    title: "Receive a follow-up email",
    description: "Our VP of Services will reach out to you to discuss feasibility and scope of your creative request.",
  },
  {
    num: "03",
    title: "Be matched with a team",
    description: "If selected, you will be matched with a team to help you make your project a reality. Your organization will have the opportunity to work with an Innovative Design team on a project over the course of the semester (fall or spring). The Team Lead will reach out to you to finalize the plans for your project and get started.",
  },
]

const projectPics = [
  {
    img: "/img/clients/CLIENTS-1.png",
    href: "",
  },
  {
    img: "/img/clients/CLIENTS-2.png",
    href: "",
  },
  {
    img: "/img/clients/CLIENTS-3.png",
    href: "",
  },
]


function ProcessList(props) {
  function Process(props) {
    const process = props.process
    return (
      <div className="g__flex__row process__row">
        <div className="g__flex__col process__num__col">
          <h2 className="process__num">{process.num}</h2>
          <hr className="process__vertical__line" />
        </div>
        <div className="g__flex__col">
          <h4>{process.title}</h4>
          <p>{process.description}</p>
          {process.button ?
            <Link className="link__button">{process.button}</Link>
            :
            <div></div>}
        </div>
      </div>
    )
  }
  return (
    <div className="g__page__wrapper process__list">
      <h2>Process</h2>
      <div className="g__flex__col">
        {props.content.map((process) => (
          <Process process={process} />
        ))}
      </div>
    </div>
  )
}

// TODO
function PastList(props) {
  return (
    <div className="g__flex__row pic__list">
      {props.pics.map((pic) => (
          <img src={pic.img} className="pic__img" />
        // <a href={pic.href}>
        // </a>
      ))}
    </div>
  )
}

export default function ClientPage() {
  return (
    <div className="clients">
      <div className="g__page__wrapper our__services">
        <PageHeader
          pageIndicator="Clients"
          title="For Organizations"
          description="As a partner, Innovative Design will work with you on your design, 
          photography, or web design project. Creative work is done pro bono for on campus student 
          organizations and university programs."
        />
        <h1>Our services</h1>
        <Services content={serviceContent} />
      </div>
      <div className="process">
        <ProcessList content={processContent} />
      </div>
      <div className="g__page__wrapper previous">
        <PageHeader
          title="Previous Work"
          description="Some of the branding, photography, and website design and development work for previous clients."
        />
        <a className="g__ex__link view__projects" href={behanceClub} target="_blank">View all projects &#x2192;</a>
        <PastList pics={projectPics} />
      </div>
    </div>
  )
}