import React from 'react';
import PageHeader from '../components/PageHeader'

export default function WatchPage(props) {
  return (
    <div className="g__page__wrapper">
      <PageHeader 
        pageIndicator="Watch"
        title="Our past livestreams of events and workshops"
        description="Content coming soon..."
      />
    </div>
  )
}

// export default class WatchPage extends React.Component {

//   render () {
//     const {
//       groups
//     } = this.props.data.markdownRemark.frontmatter;

//     return (
//       <div className="watch">
//         <Hero data={this.props.data} />
//         <div className="apply">
//           {groups.map(group => {
//             let link = <a href={group.linked_page} target="__blank">{group.description}</a>;
//             if (!group.linked_page) {
//               link = <p>{group.description}</p>;
//             }
//             return (
//               <div className="apply__section">
//                 <h2>{group.heading}</h2>
//                 {link}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export const pageQuery = graphql`
//   query WatchQuery($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         hero_heading
//         hero_subheading
//         groups {
//           heading
//           linked_page
//           description
//         }
//       }
//     }
//   }
// `;
