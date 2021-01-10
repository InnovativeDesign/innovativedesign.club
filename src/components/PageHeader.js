import React from 'react'
import '../css/components/pageheader.scss'

// pageIndicator
// title
// description
export default function PageHeader(props) {
    return (
        <div className="page__wrapper">
            <div className="page__indicator">{props.pageIndicator}</div>
            <div className="g__flex__row">
                <h2 className="page__title">{props.title}</h2>
                <p className="page__description">{props.description}</p>
            </div>
        </div>
    )
}