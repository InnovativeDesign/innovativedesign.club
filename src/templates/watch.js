import React from 'react';
import PageHeader from '../components/PageHeader'
import {liveDECAL} from '../utils/links'
import '../css/pages/watch.scss'

export default function WatchPage(props) {
  return (
    <div className="g__page__wrapper">
      <PageHeader
        pageIndicator="Watch"
        title="Decal Infosession"
        description="Watch the DeCal infosession here! Starting at 5pm PT"
      />
      <div className="button__work">
        <div className="home__button__wrapper">
          {/* <a className="home__button grey__sp21" href={behanceClub} target="_blank">See our work</a> */}
          <a className="home__button blue__sp21" href={liveDECAL} target="_blank">Watch DeCal Infosession</a>
        </div>
      </div>
    </div>
  )
}
