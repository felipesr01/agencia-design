import React from "react";
import './style.css'

export default function Card(props) {
    return (
        <div className="card">
            <div className="cardTitulo">
                <p>{props.data}</p>
                <h4>{props.titulo}</h4>
                <p>{props.empresa}</p>
            </div>
            <div className="cardTxt">
                <p>{props.texto}</p>
            </div>
        </div>
    )
}