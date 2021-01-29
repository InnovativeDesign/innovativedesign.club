import React from 'react'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import {applyRequest} from '../utils/links'

export default function RequestsPage(props) {
  return (
    <div className="g__page__wrapper requests">
      <PageHeader 
        pageIndicator = "Requests"
        title = "Request our Web or Design services here!"
        description = "Innovative Design is proud to offer pro bono services for on-campus student organizations and university programs. However, our work for off-campus groups is not pro bono. We recommend that off-campus organizations submit their design requests through this form and contact designservices.innod@gmail.com for more information on rates."
      />
      <div className="request__button__wrapper">
        <Button href={applyRequest}>Apply for our services!</Button>
      </div>
    </div>
  )
}