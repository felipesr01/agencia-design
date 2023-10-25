import React from "react";
import './style.css'

export default function Card(props) {
    return (
        <div className="card">
            <div className="cardTitulo">
                <p className="paragrafoLight">{props.data}</p>
                <h4 className="tituloLight">{props.titulo}</h4>
                <p className="paragrafoLight">{props.empresa}</p>
            </div>
            <div className="cardTxt">
                <p className="paragrafoLight">{props.texto}</p>
            </div>
        </div>
    )
}