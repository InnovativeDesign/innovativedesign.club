import React from 'react';
import PageHeader from '../components/PageHeader'
import Link from 'gatsby-link'
import '../css/pages/apply.scss'
import { applyDecalAI, applyDecalGDP, applyDecalPHOTO, applyPartner, applyRequest, infoCLUB } from '../utils/links'


const applyContent = [
  {
    title: "Club",
    links: [
      { name: "Infosession", href: infoCLUB},
    ]
  },
  {
    title: "Decals",
    links: [
      { name: "Intro to Photoshop & Illustrator", href: applyDecalAI },
      { name: "Graphic Design Principles", href: applyDecalGDP },
      { name: "Photography Principles", href: applyDecalPHOTO },
    ]
  },
  // {
  //   title: "Club",
  //   links: [
  //     { name: "Design: Blue", href:  },
  //     { name: "Design: Gold", href:  },
  //     { name: "Photo", href:  },
  //     { name: "Web", href:  },
  //   ]
  // },
  // {
  //   title: "For Organizations",
  //   links: [
  //     { name: "Partner", href: applyPartner },
  //   ]
  // },
  // {
  //   title: "For Clients",
  //   links: [
  //     { name: "Submit a request", href: applyRequest },
  //   ]
  // },
]

function Apply(props) {
  function LinkRow(props) {
    return (
      <div className="g__flex__row" style={{ justifyContent: "flex-start" }}>
        <h3 className="row__title">{props.title}</h3>
  
        <div className="g__flex__col">
          {props.links.map((link) => (
            <a className="g__ex__link col__item" href={link.href} target="_blank">
              <hr />
              <h4>{link.name} &#x2192;</h4>
            </a>
          ))}
        </div>
  
      </div>
    )
  }
  return (
    <div>
      {props.content.map((linkrow) => (
        <LinkRow 
          title={linkrow.title}
          links={linkrow.links}
        />
      ))}
    </div>
  )
}

export default function ApplyPage(props) {
  return (
    <div className="g__page__wrapper apply">
      {/* <div className="g__page__indicator">Apply</div>
        <div className="g__page__title">We want you to join us</div> */}
      <PageHeader
        pageIndicator="Apply"
        title="We want you to join us"
        description="DeCal applications are open! All are due 1/29 at 11:59pm PT. Club applications not open yet, check back 2/2"
      />
      <Apply content={applyContent}/>
    </div>
  )
}