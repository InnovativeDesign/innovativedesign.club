import React, { useState } from 'react';
// import { off } from 'superagent';
import Hero from '../components/Hero';
// import Officer from '../components/Officer';
import PageHeader from '../components/PageHeader'
import '../css/pages/about.scss'
import '../css/_base.scss'
import { officerContent } from '../utils/aboutContent'
import Img from 'gatsby-image'

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


function FAQ(props) {
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
  return (
    <div className="g__flex__col">
      {props.content.map((faq) => (
        <FAQuestion faq={faq} />
      ))}
    </div>
  )
}

const valuesContent = [
  {
    title: "Accessibility",
    img: "/img/about/ACCESSIBILITY.png",
    description: "We promote and value the personal and creative growth of our members. We are always learning and helping others."
  },
  {
    title: "Diversity",
    img: "/img/about/DIVERSITY.png",
    description: "We value exploration and curiosity for learning. We are eager to learn from our community."
  },
  {
    title: "Community",
    img: "/img/about/COMMUNITY.png",
    description: "We welcome new ideas and diverse thinking. We strive to question the status quo and think outside of the box."
  },
]

function Values(props) {
  function ValueItem(props) {
    const value = props.value
    return (
      <div className="g__flex__col value__widget">
        <img className="value__img" src={value.img} />
        <h3>{value.title}</h3>
        <p>{value.description}</p>
      </div>
    )
  }
  return (
    <div className="g__flex__row values">
      {props.content.map((value) => (
        <ValueItem value={value} />
      ))}
    </div>
  )
}

const teamsContent = [
  {
    title: "Design",
    description: "Our Gold Design Team designers work with on campus organizations for a variety of graphic design related servies. From flyers, banners, logos, and more we provide pro-bono services to support our student and local communities. In addition, teams focus on portfolio development for members through personal projects and workshops for skill building.",
    img: "/img/about/DESIGN-GOLD.png",
    extra: "Gold",
    extraColor: "#D4AF37",
    applyLink: "",
    requestLink: "",
  },
  {
    title: "Design",
    description: "Our Blue Design Team designers work with off campus clients for industry level design work. This team provides branding packages and other design services to proffesional clients.",
    img: "/img/about/DESIGN-BLUE.jpg",
    extra: "Blue",
    extraColor: "#0038C9",
    applyLink: "",
    requestLink: "",
  },
  {
    title: "Photo",
    description: "Our photo teams cover events and photoshoots for on-campus organizations. They meet during the week, as a team, to shoot for your personal portfolio, receive instruction, and build a community with photographers.",
    img: "/img/about/PHOTO.jpg",
    extra: "",
    extraColor: "",
    applyLink: "",
    requestLink: "",
  },
  {
    title: "Web",
    description: "Hone your design and development skills as you create layout mockups and build websites for clients.",
    img: "/img/about/WEB.jpg",
    extra: "",
    extraColor: "",
    applyLink: "",
    requestLink: "",
  },
]

// TODO
function Teams(props) {
  function Team(props) {
    const team = props.team
    return (
      <div className="g__flex__row team__widget">
        <div className="g__flex__col team__widget__col">
          <h3>{team.title} {team.extra ? <h3 style={{ color: team.extraColor, display: "inline-block" }}> | {team.extra}</h3> : <h3></h3>}</h3>
          <p>{team.description}</p>
          <div className="team__widget__link__list">
            <p className="g__ex__link apply__link">Applications open 2/1</p>
            <a target="_blank" href="https://www.facebook.com/events/456309675369028" className="g__ex__link apply__link">Infosession &#x2192;</a>
            {/* <a target="_blank" href={team.applyLink} className="g__ex__link apply__link">Apply &#x2192;</a>
            <a target="_blank" href={team.requestLink} className="g__ex__link apply__link">Request services &#x2192;</a> */}
          </div>
        </div>
        <img className="team__img" src={team.img} />
      </div>
    )
  }
  return (
    <div className="g__flex__col teams">
      {props.content.map((team) => (
        <Team team={team} />
      ))}
    </div>
  )
}

function Officers(props) {

  function Officer(props) {
    const officer = props.officer
    return (
      <div className="g__flex__col officer__widget">
        <div className="officer__widget__square">
          <img src={officer.img} className="officer__widget__img"/>
          <p className="officer__widget__phrase">{officer.phrase}</p>
        </div>
        <h4 className="officer__widget__name">{officer.name}</h4>
        <p className="officer__widget__position">{officer.position}</p>
      </div>
    )
  }

  return (
    <div className="g__flex__row officers">
      {props.content.map((officer) => (
        <Officer officer={officer} />
      ))}
    </div>
  )
}

export default function AboutPage(props) {
  // const { officers } = props.data.markdownRemark.frontmatter;
  // const images = props.data.allFile.edges.reduce((obj, edge) => {
  //   if (!edge.node.childImageSharp) return obj;
  //   const resolutions = edge.node.childImageSharp.resolutions;
  //   obj[resolutions.originalName] = resolutions;
  //   return obj;
  // }, {});

  return (
    <div className="about">
      <PageHeader
        pageIndicator="About"
        title="Leadership"
        description="Our club and DeCals are led by the Officer Board. 
          Each VP presides over an aspect of our club’s operation in addition to leading a 
          Design or Photography team."
      />
      <h2>Values</h2>
      <Values content={valuesContent} />
      <h2>Teams</h2>
      <Teams content={teamsContent} />
      <h2 className="officer__TITLE__MEDIA">Officers</h2>
      < Officers content={officerContent} />

      {/* <div className="officer__container">
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
      </div> */}
      <h2>FAQ</h2>
      {/* <div className="g__flex__col">
        {faqContent.map((faq) => (
          <FAQuestion faq={faq} />
        ))}
      </div> */}
      <FAQ content={faqContent} />

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
