import React, { useState } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
// import "../css/components/navbar.scss"


/* To add page
    1. add name and slug to PAGES below
    2. Add the .md page. slug => slug.md
    3. in templates, add the thing
 */

const PAGES = [
{
  name: 'About',
  slug: 'about'
}, {
  name: 'DeCals',
  slug: 'decals'
}, {
  name: 'Events',
  slug: 'events'
}, {
  name: 'Extensions',
  slug: 'extensions'
}, {
  name: 'Clients',
  slug: 'clients'
}, {
  name: 'Apply',
  slug: 'apply'
},
];


export default function Navbar() {
  const [ navOpen, setNavOpen ] = useState(false)
  function _handleHamburger(e) {
    if (e) e.preventDefault()
    setNavOpen(!navOpen)
  }
  return (
    <div
      className={classNames("nav", {
        "nav--open": navOpen
      })}
    >
      <div className="nav__wrapper">
        <Link className="nav__item nav__logo" to='/'>
          <img src="/img/logo__icon--blue.svg"/>
        </Link>
        <div
          className={classNames("nav__item", "nav__hamburger", {
            "nav__hamburger--active": navOpen
          })}
          onClick={_handleHamburger}
        >
          <div className="hamburger__bar bar--1"></div>
          <div className="hamburger__bar bar--2"></div>
        </div>
        <div className="nav__links">
          {PAGES.map((page) => {
            return (
              <Link
                className="nav__item sp21"
                to={`/${page.slug}`}
                onClick={() => _handleHamburger()}
                key={page.slug}
                dataText={page.name}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}