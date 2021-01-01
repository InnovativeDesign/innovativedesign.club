import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';


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
  name: 'Chapters',
  slug: 'chapters'
}, {
  name: 'Clients',
  slug: 'clients'
}, {
  name: 'Apply',
  slug: 'apply'
}
];

const useStyles = makeStyles({
  navItem: {
    position: "relative",
    float: "right",
    verticalAlign: "middle",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "60px",
  },
  navLink: {
    color: "#0038C9",
    margin: "0 24px",
    padding: "100px 0",
    transition: "color 200ms ease-in-out",
    '&:hover': {
      textDecoration: "none",
      color: "#A9A9A9"
    }
  },
  hamburgerBar: {
    position: "absolute",
    width: "100%",
    height: "2px",
    background: "grey",
    transition: "transform 0.25s",
    '&bar--1': {top: "4px"},
    '&bar--2': {top: "14px"}
  }

})



export default function Navbar() {
  const classes = useStyles()
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
        <div className={classes.navItem}>
          {PAGES.map((page) => {
            return (
              <Link
                className={classes.navLink}
                to={`/${page.slug}`}
                onClick={() => _handleHamburger()}
                key={page.slug}
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