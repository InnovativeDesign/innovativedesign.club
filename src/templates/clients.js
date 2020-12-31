import React from 'react';

import Hero from '../components/Hero';

export default class ClientsPage extends React.Component {

  render () {

    return (
        <h1>client page in progress...</h1>
    )
  }
}

export const pageQuery = graphql`
  query ExtensionQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
      }
    }
  }
`;
