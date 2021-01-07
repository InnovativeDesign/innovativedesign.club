import React from 'react';
import Link from 'gatsby-link'
import '../css/pages/apply.scss'

function LinkRow(props) {
  return(
    <div>
      <div className="row">
        <div className="col"><div className="row__title">{props.title}</div></div>
        <div className="col">
          <ul className = "unstyled__list">
            {props.links.map((link) => (
              <div>
                <hr />
                <li><a className = "row__item" href={link.href} target="_blank">{link.name} &#x2192;</a></li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function ApplyPage(props) {
  return(
    <div className="apply__wrapper">
      <div>
        <div className="section__title">We want you to join us</div>
        <LinkRow 
          title = "For Students"
          links = {[
            {name: "General Member", href: "https://www.mcdonalds.com/us/en-us.html"},
            {name: "DeCal Student", href: "https://www.mcdonalds.com/us/en-us.html"},
            {name: "Innovative Design Chapter", href: "https://www.mcdonalds.com/us/en-us.html"},
          ]}
        />
        <LinkRow 
          title = "For Organizations"
          links = {[
            {name: "Partner", href: "https://www.mcdonalds.com/us/en-us.html"},
          ]}
        />
        <LinkRow 
          title = "For Clients"
          links = {[
            {name: "Submit a request", href: "https://www.mcdonalds.com/us/en-us.html"},
          ]}
        />
      </div>
      </div>
  )
}