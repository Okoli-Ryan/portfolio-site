import React from 'react'
import '../styles/button.css'

export default function Button({text, style}) {
    return (
        <div className="button" style={style}>
            <p>{text}</p>
        </div>
    )
}
