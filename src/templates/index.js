// import React from 'react';
// import Link from 'gatsby-link';
// import Script from 'react-load-script';
// import Hero from '../components/Hero';
// import ApplyWidget from '../components/ApplyWidget';
// import { makeStyles, styled } from "@material-ui/core"

// const useStyles = makeStyles({
//   // SECTION 1
//   section1: {
//     flex: "3",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "calc(100vh - 60px)",
//     width: "100%",
//     padding: "0 20%",
//   },
//   buttonWrapper: {
//       display: "flex",
//       minWidth: "300px",
//       width: "70%",
//       justifyContent: "center",
//       paddingTop: "30px",
//   },
//   linkButton: {
//     margin: "10px",
//     padding: "15px 30px",
//     borderRadius: "3px",
//     textDecoration: "none",
//     transition: "0.2s ease all",
//     boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
//     backgroundColor: props => props.bcBefore,
//     color: props => props.textColor,
  
//     '&:hover': {
//       textDecoration: "none",
//       backgroundColor: props => props.bcAfter,
//       color: props => props.textColor,
//     },
//   },
//   subText: {
//     width: "40vw",
//     color: "black",
//     fontSize: "22px",
//   },

//   // SECITON 2
//   section2: {

//   }
// })

// // BUTTON FOR THE FRONTPAGE
// function LinkButton(props) {
//   const { color, ...other } = props
//   const LinkButtonClasses = useStyles(props)
//   return <Link className={LinkButtonClasses.linkButton} {...other}/>
// }

// export default function IndexPage(props) {
//   const classes = useStyles()

//   function _handleNetlifyLoad() {
//     const { netlifyIdentity } = window;
//     if (netlifyIdentity) {
//       netlifyIdentity.on('init', (user) => {
//         if (!user) {
//           netlifyIdentity.on('login', () => {
//             document.location.href = '/admin/';
//           });
//         }
//       });
//     }
//     netlifyIdentity.init();
//   }

//   return (
//     <div>
//       <Script
//         url="https://identity.netlify.com/v1/netlify-identity-widget.js"
//         onLoad={() => _handleNetlifyLoad()}
//       />
//       <div className={classes.section1}>
//         <p className={classes.subText}>Innovative Design is UC Berkeley’s premier creative agency. 
//           We are designers, photographers, and web developers 
//           together in a mission to Make Berkeley Beautiful.
//         </p>
//         <div className={classes.buttonWrapper}>
//           <LinkButton to="/club" textColor="black" bcBefore ="#EAEAEA" bcAfter  ="#B6B6B6">See our work</LinkButton>
//           <LinkButton to="/apply" textColor="white" bcBefore ="#0038C9" bcAfter  ="#002177">Apply to join us</LinkButton>
//         </div>
//       </div>
//       <div className={classes.page2}>

//       </div>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query IndexQuery {
//     markdownRemark(frontmatter: { path: { eq: "/" } }) {
//       html
//       frontmatter {
//         hero_heading
//         hero_subheading
//         row_slides {
//           img
//           caption
//           link
//           link_text
//           type
//         }
//       }
//     }
//   }
// `;


import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import Hero from '../components/Hero';
import ApplyWidget from '../components/ApplyWidget';

export default class IndexPage extends React.Component {
  _handleNetlifyLoad() {
    const { netlifyIdentity } = window;
    if (netlifyIdentity) {
      netlifyIdentity.on('init', (user) => {
        if (!user) {
          netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    netlifyIdentity.init();
  }

  render() {
    const {
      row_slides: rowSlides
    } = this.props.data.markdownRemark.frontmatter;

    return (<div className="index">
      <Script
        url="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => this._handleNetlifyLoad()}
      />

      <div className="hero">
        <img className="blob__center blob--yellow" src="img/sp20/blob--yellow.svg" />
        <div className="images__container images__container--center">
        </div>
        <div className="hero__center">
          <h1>What we do</h1>
        </div>
      </div>
      
    <ApplyWidget data={this.props.widgetMeta} />
      <div className="row__container">
        {rowSlides.map((row) => {
          return (<div className={`row row__${row.type}`}>
            <img src={row.img} />
            <p>{row.caption}</p>
            <p>
              <Link to={row.link}>
                {row.link_text} &rarr;
              </Link>
            </p>
          </div>);
        })}
      </div>
    </div>);
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
        row_slides {
          img
          caption
          link
          link_text
          type
        }
      }
    }
  }
`;