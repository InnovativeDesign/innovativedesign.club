import React from 'react';
import PageHeader from '../components/PageHeader'
import "../css/pages/decals.scss"
import { applyDecalAI, applyDecalGDP, applyDecalPHOTO, behanceDecalAI, behanceDecalGDP, behanceDecalPHOTO, behanceClub } from '../utils/links'

const widgetContent = [
  {          
    title: "Intro to Photoshop & Illustrator",
    src: "/img/decal/Photoshop-Decal.png",
    description: "In this class we teach the basics of how to use Adobe Illustrator and Photoshop. Don’t have it? Don’t worry! As a UC Berkeley student you have access to it for free. We also touch on the basics of graphic design and branding.",
    behance: behanceDecalAI,
    apply: applyDecalAI,
  },
  {          
    title: "Graphic Design Principles",
    src: "/img/decal/Graphic-Decal.png",
    description: "Already know Adobe Illustrator and Photoshop? Want to learn more about graphic Design? This class is perfect for you! We touch on a variety on styles and principles in this class. ",
    behance: behanceDecalGDP,
    apply: applyDecalGDP,
  },
  {          
    title: "Photography Principles",
    src: "/img/decal/Photography-Decal.png",
    description: "Always wanted to learn how to use a camera? Already know how to? Doesn’t matter! We will teach you how to shoot in manual and a variety of styles to go with it. This class is the perfect excuse to finally learn the settings on your camera and to broaden the way you think when you hold the camera.",
    behance: behanceDecalPHOTO,
    apply: applyDecalPHOTO,
  },

]

// props:
// src
// title
// description
// href
// TODO
function Widget(props) {
  const widget = props.widget
  return (
    <a className="decal__widget" href={widget.behance} target="blank">
      <img className="decal__widget__img" src={widget.src} />
      <div className="decal__widget__content">
        <h4 style={{minHeight: "2.5em"}}>{widget.title}</h4>
        <p style={{minHeight:"17em"}}>{widget.description}</p>
        {/* <a href={widget.apply} className="g__ex__link" target="_blank" style={{color: "black"}}>Apply &#x2192;</a> */}
        <a href="https://www.facebook.com/events/456309675369028" className="g__ex__link" target="_blank" style={{color: "black"}}>Infosession &#x2192;</a>
      </div>
    </a>
  )
}



export default function DecalsPage(props) {
  return (
    <div className="g__page__wrapper decals">
      <PageHeader 
        pageIndicator="DeCals"
        title="We host 3 DeCals every semester!"
        description="For those interested in graphic design, we offer the Intro to Photoshop & Illustrator and Graphic Design Principles Decal. 
        For those interestered in photography, we offer the Photography Principles DeCal. 
        We open applications at the beginning of each semester. "
      />
      <div className="g__flex__row decal__widget__wrapper">
        {widgetContent.map((widget) => (
          <Widget widget={widget}/>
        ))}
      </div>
    </div>

  )

}

// export default class DecalsPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}

//   render () {

//     const intro_lessons = [
//       {
//         number: 'Lesson 1',
//         title: 'Intro to Illustrator',
//         img: '/img/decal/lesson1.png',
//         url: '/decals/lesson-1/'
//       },
//       {
//         number: 'Lesson 2',
//         title: 'Pen Tool',
//         img: '/img/decal/lesson2.png',
//         url: '/decals/lesson-2/'
//       },
//       {
//         number: 'Lesson 3',
//         title: 'Color',
//         img: '/img/decal/lesson3.png',
//         url: '/decals/lesson-3/'
//       },
//       // {
//       //   number: 'Lesson 4',
//       //   title: 'Brushes, Symbols, and Effects',
//       //   img: '/img/decal/lesson4.png',
//       //   url: '/decals/lesson-4/'
//       // },
//       // {
//       //   number: 'Lesson 5',
//       //   title: 'Typography',
//       //   img: '/img/decal/lesson5.png',
//       //   url: '/decals/lesson-5/'
//       // },
//       // {
//       //   number: 'Lesson 6',
//       //   title: 'Intro to Photoshop',
//       //   img: '/img/decal/lesson6.png',
//       //   url: '/decals/lesson-6/'
//       // },
//       // {
//       //   number: 'Lesson 7',
//       //   title: 'Selection Tools and Masking',
//       //   img: '/img/decal/lesson7.png',
//       //   url: '/decals/lesson-7/'
//       // },
//       // {
//       //   number: 'Lesson 8',
//       //   title: 'Blending, Layer Styles and Filter Effects',
//       //   img: '/img/decal/lesson8.png',
//       //   url: '/decals/lesson-8/'
//       // },
//       // {
//       //   number: 'Lesson 9',
//       //   title: 'Combining Programs',
//       //   img: '/img/decal/lesson9.png',
//       //   url: '/decals/lesson-9/'
//       // },
//       // {
//       //   number: 'Lesson 10',
//       //   title: 'Identity & Ad Design',
//       //   img: '/img/decal/lesson10.png',
//       //   url: '/decals/lesson-10/'
//       // },
//       // {
//       //   number: 'Lesson 11',
//       //   title: 'Final Showcase',
//       //   img: '/img/decal/lesson11.png',
//       //   url: '/decals/lesson-11/'
//       // }
//     ];

//     const gdp_lessons = [
//       {
//         number: 'Lesson 1',
//         title: 'Illustrator Review',
//         img: '/img/decal/gdp/lesson1.png',
//         url: '/gdp/lesson-1/'
//       },
//       {
//         number: 'Lesson 2',
//         title: 'Photoshop Review',
//         img: '/img/decal/gdp/lesson2.png',
//         url: '/gdp/lesson-2/'
//       },
//       {
//         number: 'Lesson 3',
//         title: 'Color',
//         img: '/img/decal/gdp/lesson3.png',
//         url: '/gdp/lesson-3/'
//       },
//       // {
//       //   number: 'Lesson 4',
//       //   title: 'Brushes, Symbols, and Effects',
//       //   img: '/img/decal/lesson4.png',
//       //   url: '/decals/lesson-4/'
//       // },
//       // {
//       //   number: 'Lesson 5',
//       //   title: 'Typography',
//       //   img: '/img/decal/lesson5.png',
//       //   url: '/decals/lesson-5/'
//       // },
//       // {
//       //   number: 'Lesson 6',
//       //   title: 'Intro to Photoshop',
//       //   img: '/img/decal/lesson6.png',
//       //   url: '/decals/lesson-6/'
//       // },
//       // {
//       //   number: 'Lesson 7',
//       //   title: 'Selection Tools and Masking',
//       //   img: '/img/decal/lesson7.png',
//       //   url: '/decals/lesson-7/'
//       // },
//       // {
//       //   number: 'Lesson 8',
//       //   title: 'Blending, Layer Styles and Filter Effects',
//       //   img: '/img/decal/lesson8.png',
//       //   url: '/decals/lesson-8/'
//       // },
//       // {
//       //   number: 'Lesson 9',
//       //   title: 'Combining Programs',
//       //   img: '/img/decal/lesson9.png',
//       //   url: '/decals/lesson-9/'
//       // },
//       // {
//       //   number: 'Lesson 10',
//       //   title: 'Identity & Ad Design',
//       //   img: '/img/decal/lesson10.png',
//       //   url: '/decals/lesson-10/'
//       // },
//       // {
//       //   number: 'Lesson 11',
//       //   title: 'Final Showcase',
//       //   img: '/img/decal/lesson11.png',
//       //   url: '/decals/lesson-11/'
//       // }
//     ];

//     // remove lesson link lesson.url ? prefixLink(lesson.url) : ''
//     const lessonElements = _.map(intro_lessons, (lesson, index) => {
//       return (
//         <div
//           key={ `lessonElem-${index}` }
//           className="lesson"
//         >
//           <Link
//             className={`lesson__link${!lesson.url ? ' lesson__link-disabled' : ''}`}
//             to={lesson.url ? lesson.url : '/decals#'}
//           >
//             <div
//               className="lesson__photo"
//               style={{
//                 backgroundImage: `url('${lesson.img}')`
//               }}
//             ></div>
//             <div className="lesson__overlay"></div>
//             <div className="lesson__details">
//               <div className="lesson__details--number">
//                 { lesson.number }
//               </div>
//               <div className="lesson__details--title">
//                 { lesson.title }
//               </div>
//             </div>
//           </Link>
//         </div>
//       );
//     });

//     const gdp_lessonElements = _.map(gdp_lessons, (lesson, index) => {
//       return (
//         <div
//           key={ `lessonElem-${index}` }
//           className="lesson"
//         >
//           <Link
//             className={`lesson__link${!lesson.url ? ' lesson__link-disabled' : ''}`}
//             to={lesson.url ? lesson.url : '/decals#'}
//           >
//             <div
//               className="lesson__photo"
//               style={{
//                 backgroundImage: `url('${lesson.img}')`
//               }}
//             ></div>
//             <div className="lesson__overlay"></div>
//             <div className="lesson__details">
//               <div className="lesson__details--number">
//                 { lesson.number }
//               </div>
//               <div className="lesson__details--title">
//                 { lesson.title }
//               </div>
//             </div>
//           </Link>
//         </div>
//       );
//     });

//     return (<div className="decals">
//       <Hero data={this.props.data}>
//       </Hero>
//       <ApplyWidget data={this.props.widgetMeta} />
//         <div className="page__wrapper decal">
//           <h1 className="section__title">intro to photoshop and illustrator decal</h1>
//           <div className="description">
//             This course teaches graphic design through the use of Photoshop and Illustrator. Adobe Photoshop and Illustrator CC will be taught in a series of tutorials complemented with exercises to perform during class and at home. These exercises give students the opportunity to practice the tools, create designs, and exercise their creativity. We
// will also explore graphic design trends and their applications, and learn to receive and give critiques in order to improve your design work. We hope to make this a fun and rewarding class.
//           <br></br><br></br>
//           <a href="https://www.behance.net/innod-decal">
//             Check out past student work here.
//           </a>

//           </div>

//           <div className="lessons__wrapper">
//             {lessonElements}
//           </div>

//           <h1 className="section__title">photo decal</h1>
//           <div className="description">
// In this class, students will be introduced to the history, art, and practices of photography in the modern world. Students will learn how to manually operate a digital SLR camera, how to use lighting in conjunction with posing to create compositions, and how to post-process RAW photos. Different disciplines will also be taught and include portraiture, landscape, architecture, product, studio and more. Over the semester, students will learn critiques of photos and develop a more artistic eye for photos.
//           </div>
//           <h1 className="section__title">graphic design principles decal</h1>
//           <div className="description">
//             This DeCal is designed for students who are technically proficient and are looking to learn design principles in order to apply their technical skills to projects. This DeCal is not meant to give you all the tools and knowledge to become a professional designer. However, we will provide an essential foundation to start your career in design.
//           </div>

//           <div className="lessons__wrapper">
//             {gdp_lessonElements}
//           </div>
//         </div>
//     </div>);
//   }
// }



// export const pageQuery = graphql`
//   query DecalsQuery($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         hero_heading
//         hero_subheading
//       }
//     }
//   }
// `;
