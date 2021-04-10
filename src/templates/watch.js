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
        title="Club Infosession"
        description="Future livestreams will be posted here. Both club and decal applications have closed, check back next semester!"
      />
      <div className="watch__button__wrapper">
        <Button color="blue" href={"https://youtu.be/gXO-ENcg1Zk"}>Saturday livestream</Button>
        <Button color="blue" href={"https://youtu.be/5jPkz14a9AE"}>Sunday livestream</Button>
      </div>
    </div>
  )
}