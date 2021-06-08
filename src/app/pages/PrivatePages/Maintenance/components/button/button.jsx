import React from 'react'
import './button.css'

export default function button(props){
    return(
        <button className={props.mode + " xbutton"} onClick={props.onClick}>
            {props.text}
        </button>
    )
}