import React from 'react'
import PageHeader from '../components/PageHeader'
import '../css/pages/store.scss'

export default function StorePage(props) {
  return (
    <div className="g__page__wrapper">
      <PageHeader 
        pageIndicator = "Art sale"
        title = "Art sale!"
        description = "Buy our beautiful prints! On sale till 4/1"
      />
    </div>
  )
}