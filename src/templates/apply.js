import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  // SECTION 1
  sectionONE: {
    flex: "3",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 60px)",
    width: "100%",
    padding: "0 20%",
  },
})

export default function ApplyPage(props) {
  const classes = useStyles()
  return(
    <div className={classes.sectionONE}>
      <p>APPLY PAGE W FUNCTIONAL</p>
    </div>
  )
}


// export default class ApplyPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}

//   render () {

//     return (
//       <p>APPLY PAGE IN PROGRESS</p>
//     );
//   }
// }
