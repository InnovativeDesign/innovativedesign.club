import React from 'react';
import PageHeader from '../components/PageHeader'
import {liveDECAL} from '../utils/links'
import '../css/pages/watch.scss'
import { Player, Chat } from 'livestreams';

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
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/yFC5y352RaM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/live_chat?v=yFC5y352RaM&embed_domain=staging.innovativedesign.club/watch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/live_chat?v=yFC5y352RaM&embed_domain=www.staging.innovativedesign.club/watch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Player source="youtube" id="yFC5y352RaM" autoPlay/>
      <Chat source="youtube" id="yFC5y352RaM"/> */}
    </div>
  )
}


// http://localhost:8000/
// https://www.youtube.com/embed/yFC5y352RaM
// https://www.youtube.com/live_chat?v=yFC5y352RaM&embed_domain=localhost:8000
