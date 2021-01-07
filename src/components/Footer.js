import React from 'react';
import Link from 'gatsby-link';
import '../css/components/footer.scss'


function Column(props) {
  return (
    <div className="col">
      <h4 className="column__title">{props.title}</h4>
      <ul className="unstyled__list">
        {props.links.map((page) => (
          <li>
            {page.slug ?
              <Link
                className="column__item"
                to={`/${page.slug}`}
                key={page.slug}
              >
                {page.name}
              </Link>
              :
              <a
                href={page.href}
                target="_blank"
                className="column__item"
                key={page.slug}
              >
                {page.name}
              </a>}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* LOGO*/}
          <div className="col">
            <Link to="/" className="banner__logo">
              <img src="/img/Footer-Logo.svg" alt="Innovative Design"/>
            </Link>
          </div>
          {/* STUDENTS */}
          <Column
            title="Students"
            links={[
              { name: "Apply", slug: "apply" },
              { name: "About", slug: "about" },
              { name: "Events", slug: "events" },
              { name: "DeCals", slug: "decals" },
              { name: "Chapters", slug: "chapters" },
            ]}
          />
          {/* ORGS 4 */}
          <Column
            title="Organizations"
            links={[
              { name: "Apply", slug: "apply" },
              { name: "Clients", slug: "clients" },
            ]}
          />
          {/* LINKS 5 */}
          <Column
            title="Find Us"
            links={[
              { name: "Facebook", href: "https://www.facebook.com/InnovativeDesignUCB" },
              { name: "Instagram", href: "https://www.instagram.com/innodatcal/" },
              { name: "Behance", href: "https://www.behance.net/InnoD" },
              { name: "Twitter", href: "https://twitter.com/InnoDatCAL" },
            ]}
          />
        </div>

      </div>
    </div>
  )
}