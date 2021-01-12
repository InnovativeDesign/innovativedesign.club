import React, { useState } from 'react';
import Hero from '../components/Hero';
import Officer from '../components/Officer';
import PageHeader from '../components/PageHeader'
import '../css/pages/about.scss'
import '../css/_base.scss'

const faqContent = [
  {
    question: "What is Innovative Design?",
    answer: "Innovative Design (“InnoD”) is a creative agency and ASUC Charter Program that is run entirely by students. Our members are talented graphic designers, photographers, and web designers. Together, we strive to Make Berkeley Beautiful by providing design education and services to the campus community.",
  },
  {
    question: "How much do your services cost?",
    answer: "Innovative Design’s services are pro-bono (at no cost) for clients affiliated with UC Berkeley, like student clubs or academic departments. For off-campus clients, please contact us for more information.",
  },
  {
    question: "How do I join Innovative Design?",
    answer: "We recruit new members at the beginning of every semester! Information is posted on our website and Facebook page at the beginning of every semester.",
  },
  {
    question: "How do I get in touch with you?",
    answer: "Feel free to message us on Facebook or email us at innovativedesignatcal@gmail.com!",
  },
  {
    question: "What design education do you offer?",
    answer: "For Berkeley students, we offer three DeCals: Intro to Photoshop and Illustrator, Photography Principles, and Graphic Design Principles. All three are offered every semester, and information is posted on our website and Facebook page at the beginning of every semester.For the general public, we offer events twice a semester. These include HEX (member-led creative workshop), CMYK (a design competition with a real client), and RGB (an industry speaker panel). Information is posted on our website and Facebook page at the beginning of every semester.",
  },
  {
    question: "What do members of the club do?",
    answer: "As a member of Innovative Design, you will be a part of a team of other designers and photographers that work together on client work and personal projects. You will have 2 hours of meeting a week that consist of workshops, tutorials, critiques with your team members and team leads. You will also be a part of our larger design family and join our member-led workshop series HEX, our design events RGB and CMYK, and club socials to get to know members in other disciplines. Members are also welcome to audit our DeCals.",
  },
  {
    question: "Are you related to the club with the same name at USC?",
    answer: "Yes. InnoD at USC is our sister club based at the University of Southern California.",
  },
  {
    question: "Who leads the club?",
    answer: "InnoD is led by an officer board consisting of experienced members. Current members are able to apply to become an officer at the end of every semester.",
  },
  {
    question: "Do I need to re-apply every semester?",
    answer: "Yes. Our members must re-apply for every semester they would like to be an active member. However, our member benefits are available to any past or current member at any time.",
  },
]

function FAQuestion(props) {
  const faq = props.faq
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <a className="g__ex__link faq__question" href="javascript:;" onClick={() => setIsOpen(!isOpen)}>{faq.question}</a>
      {isOpen ? <p className="fade__in">{faq.answer}</p> : <p></p>}
    </div>

  )
}

export default function AboutPage(props) {
  const { officers } = props.data.markdownRemark.frontmatter;
    const images = props.data.allFile.edges.reduce((obj, edge) => {
      if (!edge.node.childImageSharp) return obj;
      const resolutions = edge.node.childImageSharp.resolutions;
      obj[resolutions.originalName] = resolutions;
      return obj;
    }, {});

    return (
      <div className="about">
        <PageHeader 
          pageIndicator="About"
          title="Leadership"
          description="Our club and DeCals are led by the Officer Board. 
          Each VP presides over an aspect of our club’s operation in addition to leading a 
          Design or Photography team."
        />
        <div className="officer__container">
          {officers.map((officer) => {
            const originalName = officer.image.substring(officer.image.lastIndexOf('/') + 1);
            return (<Officer
              info={officer}
              image={images[originalName]}
            />);
          })}
          {
            Array(6 - officers.length % 6).fill(0).map(() =>
              <div className="officer__block officer__block-empty" />
            )
          }
        </div>
        <h2>FAQ</h2>
        <div className="g__flex__col">
          {faqContent.map((faq) => (
            <FAQuestion faq={faq}/>
          ))}
        </div>
      </div>
    );
}

export const pageQuery = graphql`
  query AboutQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        hero_heading
        hero_subheading
        officers {
          name
          role
          secondary_role
          image
          hover_blurb
        }
      }
    }
    allFile {
      edges {
        node {
          childImageSharp {
            resolutions(
              traceSVG: {
                color: "lightgray"
                optTolerance: 0.4
                turdSize: 100
                turnPolicy: TURNPOLICY_MAJORITY
              },
              width: 150,
              height: 219,
              quality: 100,
              cropFocus: CENTER
            ) {
              width
              height
              src
              srcSet
              tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`;
