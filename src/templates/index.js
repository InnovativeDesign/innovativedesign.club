import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import Hero from '../components/Hero';
import ApplyWidget from '../components/ApplyWidget';
import { makeStyles, styled } from "@material-ui/core"

const useStyles = makeStyles({
  linkButton: {
    margin: "10px",
    padding: "15px 30px",
    borderRadius: "3px",
    textDecoration: "none",
    transition: "0.2s ease all",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: props => props.bcBefore,
    color: props => props.textColor,
  
    '&:hover': {
      textDecoration: "none",
      backgroundColor: props => props.bcAfter,
      color: props => props.textColor,
    },
  },
})

// BUTTON FOR THE FRONTPAGE
function LinkButton(props) {
  const { color, ...other } = props
  const LinkButtonClasses = useStyles(props)
  return <Link className={LinkButtonClasses.linkButton} {...other}/>
}

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
      <div className={classes.buttonWrapper}>
        <LinkButton to="/club" textColor="black" bcBefore ="#EAEAEA" bcAfter  ="#B6B6B6">See our work</LinkButton>
        <LinkButton to="/apply" textColor="white" bcBefore ="#0038C9" bcAfter  ="#002177">Apply to join us</LinkButton>
      </div>
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
