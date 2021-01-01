import React from 'react';
import Link from 'gatsby-link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainFooter: {
    padding: "3em",
    height: "350px",
    position: "relative",
    backgroundColor: "#0038C9",
    width: "100%",
  },
  logo: {
    marginRight: "70px"
  },
  unstyledList: {
    listStyle: "none",
  },
  columnTitle: {
    color: "#FFFFFF",
    fontWeight: "500"
  },
  listItem: {
    color: "#FFFFFF",
    lineHeight: "40px",
    paddingRight: "15%",
    fontWeight: "400",
    transition: "color 200ms ease-in-out",
    '&:hover': {
      textDecoration: "none",
      color: "#A9A9A9"
    }
  },
})

function Column(props) {
  return (
    <div className="col">
      <h4 className={props.classes.columnTitle}>{props.title}</h4>
          <ul className = {props.classes.unstyledList}>
            {props.links.map((page) => (
              <li> 
                {page.slug ? 
                <Link
                className={props.classes.listItem}
                to={`/${page.slug}`}
                key={page.slug}
                >
                  {page.name}
                </Link>
                : 
                <a 
                  href = {page.href} 
                  target= "_blank"
                  className={props.classes.listItem}
                  key = {page.slug}
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
  const classes = useStyles()

  return (
      <div className={classes.mainFooter}>

        <div className="container">
          <div className="row">
            {/* LOGO*/}
            <div className="col">
              <Link to = "/" className = {classes.logo}>
                <img src="/img/Footer-Logo.png" />
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
              classes = {classes}
            />
            {/* ORGS 4 */}
            <Column 
              title = "Organizations"
              links = {[
                { name: "Apply", slug: "apply"},
                { name: "Clients", slug: "clients"},
              ]}
              classes = {classes}
            />
            {/* LINKS 5 */}
            <Column 
              title = "Find Us"
              links = {[
                { name: "Facebook", href: "https://www.facebook.com/InnovativeDesignUCB"},
                { name: "Instagram", href: "https://www.instagram.com/innodatcal/"},
                { name: "Behance", href: "https://www.behance.net/InnoD"},
                { name: "Twitter", href: "https://twitter.com/InnoDatCAL"},
              ]}
              classes = {classes}
            />
          </div>

        </div>
      </div>
  )
}