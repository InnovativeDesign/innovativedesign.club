import React from 'react'
import '../css/components/pageheader.scss'

// pageIndicator
// title
// description
export default function PageHeader(props) {
    return (
        <div>
            <div className="page__indicator">{props.pageIndicator}</div>
            <div className="col__2">
                <div className="page__title">{props.title}</div>
                <div className="page__description">{props.description}</div>
            </div>
        </div>
    )
}