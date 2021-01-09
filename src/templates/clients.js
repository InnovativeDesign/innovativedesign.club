import React from 'react';
import PageHeader from "../components/PageHeader"
import "../css/pages/clients.scss"

// export default class ApplyPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}

//   render () {

//     return (
//       <p>CLIENTS PAGE IN PROGRESS</p>
//     );
//   }
// }

export default function ClientPage() {
  return (
    <div className="g__page__wrapper">
      <PageHeader 
        pageIndicator="Clients"
        title="For Organizations"
        description="As a partner, Innovative Design will work with you on your design, 
        photography, or web design project. Creative work is done pro bono for on campus student 
        organizations and university programs."
      />
      <h1>Our service</h1>
      
    </div>
  )
}