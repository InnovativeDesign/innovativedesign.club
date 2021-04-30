import React from 'react';
import PageHeader from '../components/PageHeader'
import {infoCLUB, liveCLUB, liveDECAL} from '../utils/links'
import '../css/pages/watch.scss'
import { Player, Chat } from 'livestreams';
import Button from '../components/Button'

export default function WatchPage(props) {
  return (
    <div className="g__page__wrapper watch">
      <PageHeader
        pageIndicator="Watch"
        title="Officer Infosession"
        description="Come join our officer board!"
      />
      <div className="watch__button__wrapper">
        <Button color="blue" href={"https://berkeley.zoom.us/j/91551397401"}>Officer Infosession</Button>
        {/* <Button color="blue" href={"https://youtu.be/5jPkz14a9AE"}>Sunday livestream</Button> */}
      </div>
    </div>
  )
}