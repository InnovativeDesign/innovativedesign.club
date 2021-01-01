import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import { makeStyles, styled } from '@material-ui/core/styles';
import { checkPropTypes } from 'prop-types';


// export default class Footer extends React.Component {
//   render() {
//     return <div className="nav__item nav__media">
//       <a href="https://www.facebook.com/InnovativeDesignUCB/" target="_blank">
//         <FontAwesome
//           className="media__icon fb"
//           name="facebook"
//         />
//       </a>
//       <a href="https://twitter.com/innodatcal" target="_blank">
//         <FontAwesome
//           className="media__icon twitter"
//           name="twitter"
//         />
//       </a>
//       <a href="https://www.instagram.com/innodatcal/" target="_blank">
//         <FontAwesome
//           className="media__icon ig"
//           name="instagram"
//         />
//       </a>
//     </div>
//   }
// }

const useStyles = makeStyles({
  mainFooter: {
    padding: "3em",
    position: "relative",
    backgroundColor: "#0038C9",
    color: "white",
    bottom: "0",
    width: "100%"
  },
  unstyledList: {
    listStyle: "none",
  },
  columnTitle: {
    color: "#FFFFFF",
  },
  listItem: {
    color: "#FFFFFF",
    fontWeight: "100",
    '&:hover': {
      textDecoration: "none",
      color: "#a9a9a9"
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
                <Link
                className={props.classes.listItem}
                to={`/${page.slug}`}
                key={page.slug}
                >
                  {page.name}
                </Link>
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
        {/* < Link
          className="nav__item nav__link"
          to={`/${page.slug}`}
          onClick={() => _handleHamburger()}
          key={page.slug}
        >
          {page.name}
        </Link > */}

        <div className="container">
          <div className="row">
            {/* LOGO*/}
            <div className="col">
              <Link to = "/">
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
            <div className="col">
              <h4>Find Us</h4>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Behance</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
  )
}