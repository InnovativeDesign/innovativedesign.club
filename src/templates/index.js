import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import Hero from '../components/Hero';
import ApplyWidget from '../components/ApplyWidget';

export default function IndexPage(props) {
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

  const {
    row_slides: rowSlides
  } = props.data.markdownRemark.frontmatter

  return (<div className="index">
      <Script
        url="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => _handleNetlifyLoad()}
      />

      <div className="hero">
        <img className="blob__center blob--yellow" src="img/sp20/blob--yellow.svg" />
        <div className="images__container images__container--center">
        </div>
        <div className="hero__center">
          <h1>fuckoff</h1>
        </div>
      </div>
      
    <ApplyWidget data={props.widgetMeta} />
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
    </div>)
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
