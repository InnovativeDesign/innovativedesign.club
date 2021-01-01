import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import Hero from '../components/Hero';
import ApplyWidget from '../components/ApplyWidget';
import { makeStyles, styled } from "@material-ui/core"
import Button from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    margin: "10px",
    padding: "15px 30px",
    borderRadius: "3px",
    textDecoration: "none",
    transition: "0.2s ease all",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#0038C9",
    color: "white",

    '& Link': {
      color: "black"
    },
    '& p': {
      color: "white"
    },
  
    '&:hover': {
      textDecoration: "none",
      backgroundColor: "#002174",
    },


  }
})

export default function IndexPage(props) {
  const classes = useStyles()
  function _handleNetlifyLoad() {
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
  return (
    <div>

      <div className={classes.button}>
        <Link to="/club" className="infosession__button infosession__button--sp21grey">
          See our work
        </Link>
        <Link to="/apply">
          Apply to join us
        </Link>
        <p>FUCK</p>
      </div>
      <p>gey</p>
    </div>
  )
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
