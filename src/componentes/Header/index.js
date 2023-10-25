import React, { useState } from "react";
import './style.css'
import logo from '../../assets/logo.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'



export default function Header() {

    const topoDark = 'topoDark'
    const topoLight = 'topoLight'

    const [darkMode, setDarkMode] = useState(false)

    const alteraTema = () => {
        setDarkMode(!darkMode)
    }


    return (
        <header className={darkMode? topoDark : topoLight}>
            <img className="logo" src={logo} alt="logo"/>
            <button onClick={alteraTema}>
                <img src={darkMode? sun : moon} alt="lua" />
            </button>
        </header>
    )
}