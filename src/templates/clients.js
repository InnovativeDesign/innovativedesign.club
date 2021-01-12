import React from 'react';
import PageHeader from "../components/PageHeader"
import "../css/pages/clients.scss"

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

function ServiceWidget(props) {
  const service = props.service
  return (
    <div className="g__flex__col service__widget" >
      <img src={service.img}/>
      <h4>{service.title}</h4>
      <p>{service.description}</p>
    </div>
  )
}

const processContent = [
  
]

function Process(props) {
  return (
    <h2>Process</h2>
  )
}

export default function ClientPage() {
  return (
    <div className="g__page__wrapper clients">
      <PageHeader 
        pageIndicator="Clients"
        title="For Organizations"
        description="As a partner, Innovative Design will work with you on your design, 
        photography, or web design project. Creative work is done pro bono for on campus student 
        organizations and university programs."
      />
      <h1>Our services</h1>
      <div className="g__flex__row service__row">
        {serviceContent.map((service) => (
          <ServiceWidget service={service}/>
        ))}
      </div>
      <Process />
    </div>
  )
}