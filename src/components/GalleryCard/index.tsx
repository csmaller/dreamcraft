import React, { useState } from 'react'
import style from './galleryCardStyle.module.scss';

/**
 * beautiful gallery card Component
 **/

export default (props) => {
    const [change, setChange] = useState(false)

    const buttonClick = () => {
        if (change === false) {
            setChange(true)
        } else {
            setChange(false)
        }
    }

    // Zoom In/Out on click event.
    const applyStyle =
        change === true ? `${style.zoomIn}` : `${style.galleryCard}`
    // Add Close-icon when picture was zoomed.
    const changeIcon =
        change === true ? `${style.close}` : `${style.hide}`

    const { name, img } = props

    return (
        <div className={applyStyle} >
            <span className={changeIcon} onClick={buttonClick}>
                &times;
        </span>
            <h1>{name}</h1>
            <img src={img} alt={name} onClick={buttonClick} />
        </div>
    )
}
