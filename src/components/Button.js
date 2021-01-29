import React from 'react'
import '../css/components/button.scss'

// color
// backgroundColor
// href
export default function Button(props) {
    return (
        <a className={"button " + (props.color == "grey" ? "grey__sp21" : "blue__sp21")} href={props.href} target="_blank">
            {props.children}
        </a>
    )
}