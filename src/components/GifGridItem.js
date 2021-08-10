import React from 'react'
import "../index.css"
import "animate.css"
export default function GifGridItem( {title, id, url} ) {
    return (
        <div className="animate__animated animate__rubberBand">
            <li className="itemCard">
                <h2>{title}</h2>
                <hr></hr>
                <h2>ID: {id}</h2>
                <img src={url} alt="gifImagen"/>
            </li>
        </div>
    )
}
