import React from 'react';
import PageHeader from '../components/PageHeader'
import Link from 'gatsby-link'
import '../css/pages/apply.scss'

function LinkRow(props) {
  return (
    <div>
      <div className="row">
        <div className="col"><div className="row__title">{props.title}</div></div>
        <div className="col">
          <div className="unstyled__list">
            {props.links.map((link) => (
              <a className="g__ex__link my__item" href={link.href} target="_blank">
                <hr />
                {link.name} &#x2192;
              </a>
            ))}
          </div>
        </div>
      </div>
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
          description=""
        />

        <LinkRow
          title="For Students"
          links={[
            { name: "Club", href: "https://www.mcdonalds.com/us/en-us.html" },
            { name: "DeCal", href: "https://www.mcdonalds.com/us/en-us.html" },
            { name: "Chapter", href: "https://www.mcdonalds.com/us/en-us.html" },
          ]}
        />
        <LinkRow
          title="For Organizations"
          links={[
            { name: "Partner", href: "https://www.mcdonalds.com/us/en-us.html" },
          ]}
        />
        <LinkRow
          title="For Clients"
          links={[
            { name: "Submit a request", href: "https://www.mcdonalds.com/us/en-us.html" },
          ]}
        />
    </div>
  )
}