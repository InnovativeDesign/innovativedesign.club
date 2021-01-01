import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import Navbar from '../components/Navbar';
import anime from "animejs";
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'

import '../css/_index.scss';

export default function RootLayout(props) {
  return (
    <DocumentTitle title='Innovative Design'>
      <div id="root" className="root">
      <Helmet>
            <meta
              name="description"
              content="Cal's student run creative agency, on a mission to make Berkeley beautiful."
            />
            <meta
              name="keywords"
              content="innovative, design, innovative design, college, berkeley, design club, design organization, professional serfices, berkeley design club, innod, innod at cal, make berkeley beautiful"
            />
            <meta
              property="og:image"
              content="http://innovativedesign.club/img/Logo.png"
            />
            <meta
              property="og:title"
              content="Innovative Design"
            />
            <meta
              property="og:type"
              content="website" />
            <meta
              property="og:url"
              content="http://innovativedesign.club"
            />
            <link
              rel="icon"
              type="img/png"
              href='/img/Logo.png'
            />
            <link
              href='https://fonts.googleapis.com/css?family=Lato:400,400italic,700'
              rel='stylesheet'
              type='text/css'
            />
            <link
              href='https://fonts.googleapis.com/css?family=Open+Sans'
              rel='stylesheet'
              type='text/css'
            />
            <link
              href='https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,700,800,900'
              rel='stylesheet'
              type='text/css'
            />
            <link
              href='https://fonts.googleapis.com/css?family=Fira+Sans:400,300,300italic,400italic,500,500italic,700,700italic'
              rel='stylesheet'
              type='text/css'
            />
            <link 
              rel="preconnect" 
              href="https://fonts.gstatic.com">
            </link>
            <link 
              href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" 
              rel="stylesheet">
            </link>
            <link
              href='https://fonts.googleapis.com/css?family=Fira+Sans:400,300,300italic,400italic,500,500italic,700,700italic'
              rel='stylesheet'
              type='text/css'
            />
            <link 
              href="https://fonts.googleapis.com/css?family=Rakkas&display=swap" 
              rel="stylesheet"> 
            </link>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
            <script src="/pace.js"></script>
            <link href="/pace.css" rel="stylesheet" />
          </Helmet>
          
          <Navbar />
          {/* PUT CONTENT INTO COMPONENTS */}
          <div className="content">
            { props.children({ ...props, widgetMeta: props.data }) }
          </div>
          <Footer />
      </div>
    </DocumentTitle>
  )
}

export const pageQuery = graphql`
  query WidgetMetaQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: {regex: "/.*-widget/g"}} }
    ) {
      edges {
        node {
          frontmatter {
            apply_message
            apply_types {
              apply_deadline
              apply_link
              description
              status
              heading
              infosession
              linked_page
            }
          }
        }
      }
    }
  }
`;
