import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import { makeStyles, styled } from '@material-ui/core/styles';


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
  }
})


export default function Footer() {
  const classes = useStyles()
  return (
    <div className = {classes.mainFooter}>
      <div className = "container">
        <div className = "row">
          {/* Column 1 */}
          <div className = "col">
            <img src = "/img/Footer-Logo.png"/>
          </div>
          {/* Column 2 */}
          <div className = "col">
            <h4>General</h4>
            <ul>
              <li>About</li>
              <li>Teams</li>
              <li>Events</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className = "col">
            <h4>Students</h4>
            <ul>
              <li>Apply</li>
              <li>About</li>
              <li>Events</li>
              <li>DeCals</li>
              <li>Chapters</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className = "col">
            <h4>Organizations</h4>
            <ul>
              <li>Apply</li>
              <li>Clients</li>
            </ul>
          </div>
          {/* Column 5 */}
          <div className = "col">
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