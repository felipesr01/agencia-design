import React from "react";
import './style.css'
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <button>
                <img src="assets/moon.png" alt="lua" />
            </button>
        </header>
    )
}