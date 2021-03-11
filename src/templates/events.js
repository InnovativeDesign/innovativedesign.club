import React from 'react';
import PageHeader from '../components/PageHeader'
import "../css/pages/events.scss"

const eventContent = [
  {
    title: "RGB: Reach, Grow, Build",
    img:"/img/events/RGB-IMG.png",
    description: "RGB 2021 will be a virtual event, and we'll be joined by speakers whose careers have taken them to Spotify, the New York Times, and beyond!",
    date: "Date: 3/13/21, 1-4pm PT",
    href: "https://rgb.innovativedesign.club/"
  },
  {
    title: "HEX: Hone & Explore", 
    img:"/img/events/HEX-IMG.png", 
    description: "A weekend of free, virtual workshops where students can learn various creative skills.",
    date: "Date: TBD",
    href: "https://hex.innovativedesign.club/"
  },
  {
    title: "CMYK: Come Make Your Mark",
    img:"/img/events/CMYK-IMG.png",
    description: "A designathon and day of learning and practicing design through a series of talks and friendly competition.",
    date: "Date: TBD",
    href: "https://cmyk.innovativedesign.club/"
  },
]

function Event(props) {
  const event = props.event
  return (
    <a href={event.href} target="_blank" className="g__flex__row event__row">
      <img src={event.img} className="event__img"/>
      <div className="g__flex__col event__content__col">
        <h4>{event.title}</h4>
        <h4>{event.date}</h4>
        <p>{event.description}</p>
      </div>
    </a>
  )
}

function EventList(props) {
  return (
    <div className="g__flex__col event__col">
      {props.content.map((event) => (
        <Event event={event} />
      ))}
    </div>
  )
}

export default function EventsPage(props) {
  return (
    <div className="g__page__wrapper events">
      <PageHeader 
        pageIndicator="Events"
        title="We always like to share what we know"
        description="At Innovative Design, we value education. 
        That’s why we regularly host events to increase the number of design opportunities in our community."
      />
      <h2>Our events</h2>
      {/* <p>Looking to partner? <a className="g__ex__link lets__talk" target="_blank" href="">Lets talk &#x2192;</a></p> */}
      <EventList content={eventContent}/>
    </div>
  )
}



// import $ from 'jquery';
// import _ from 'lodash';

// export default class EventsPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() { }

//   render () {
//     const timeline = (
//       <ul className="timeline">
//         <li className="event" data-date="January 24, 2018">
//           <h3>Decal Infosession</h3>
//           <h4 className="hidden__date">January 24, 8 & 8:30 PM @ 310 Jacobs</h4>
//           <p>
//             InnoD is back and ready for even more design education! 
//             This semester, we will be offering our Intro to Photoshop and Illustrator, 
//             Graphic Design Principles, and Photography Principles decals.
//           </p>
//           <p>
//             Both sessions will have the same information about all three decals. 
//             Due to safety regulations, we can only allow 130 people in 310 Jacobs at a time. 
//             Please line up early for the 8:00 session because we cannot guarantee admission 
//             when the room is full. You may be relegated to the 8:30 session.
//           </p>
//           <div className="button__wrapper">
//             <a href="https://www.facebook.com/events/1195030613960379/" target="">
//               <button className="info__button">rsvp</button>
//             </a>
//           </div>
//         </li>
//         <li className="event" data-date="January 31, 2018">
//           <h3>Club Infosession</h3>
//           <h4 className="hidden__date">January 31, 8 PM @ 10 Evans</h4>
//           <p>
//             COME and CREATE with Innovative Design, this Spring 2018! 
//           </p>
//           <p>
//             We are UC Berkeley's student-run creative agency and a family of 
//             multi-talented individuals. Come by our info session and see what we 
//             have to offer and how YOU can join us and Make Berkeley Beautiful.
//           </p>
//           <p>
//             We'll go over our teams for Graphic Designers, Photographers, and 
//             Web Designers, the perks of joining, and the application process. 
//             Applications will open at the end of the infosession, and they will be 
//             due at the end of February 2nd!
//           </p>
//           <div className="button__wrapper">
//             <a href="https://www.facebook.com/events/179037506180760/" target="">
//               <button className="info__button">rsvp</button>
//             </a>
//           </div>
//         </li>
//         <li className="event" data-date="March 3, 2018">
//           <h3>RGB - Information coming soon</h3>
//           <h4 className="hidden__date">March 3 @ Jacobs</h4>
//           {/*<div className="button__wrapper">
//             <a href="" target="">
//               <button className="info__button">rsvp</button>
//             </a>
//           </div>*/}
//         </li>
//         <li className="event" data-date="March 17-18, 2018">
//           <h3>HEX - Information coming soon</h3>
//           <h4 className="hidden__date">March 17-18 @ Wheeler 102</h4>
//           {/*<div className="button__wrapper">
//             <a href="" target="">
//               <button className="info__button">rsvp</button>
//             </a>
//           </div>*/}
//         </li>
//       </ul>
//     );

//     return (
//       <DocumentTitle title="Innovative Design">
//         <div>
//           <div className="page__wrapper events">
//             <h1 className="section__title">upcoming events</h1>
//             <div className="info">
//               Here is the timeline for our public events this semester. 
//               You can check back here or like our Facebook page for updates.
//             </div>
//             { timeline }
//           </div>
//         </div>
//       </DocumentTitle>
//     );
//   }
// }
