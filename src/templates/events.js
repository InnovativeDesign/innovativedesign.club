import React from 'react';
import PageHeader from '../components/PageHeader'
import "../css/pages/events.scss"

const eventContent = [
  {title: "HEX: Hone & Explore", img:"/img/events/HEX-IMG.png", description: "A weekend of free, virtual workshops where students can learn various creative skills."}
]

function Event(props) {
  const event = props.event
  return (
    <div className="g__flex_row">
      <img src={event.img} />
      <div className="g__flex__col">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  )
}

function EventList(props) {
  return (
    <div>
      {props.content.map((event) => (
        <Event event={event} />
      ))}
    </div>
  )
}

export default function EventsPage(props) {
  return (
    <div className="g__page__wrapper">
      <PageHeader 
        pageIndicator="Events"
        title="We always like to share what we know"
        description="At Innovative Design, we value education. 
        That’s why we regularly host events to increase the number of design opportunities in our community."
      />
      <h2>Our events</h2>
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
