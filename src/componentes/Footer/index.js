import React from "react";
import './style.css'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import dribble from '../../assets/dribble.png'
import behance from '../../assets/behance.png'
import googlePlus from '../../assets/google-plus.png'

export default function Footer() {
    return (
        <footer className="rodape">
            <img className="logo" src={logo} alt="logo"/>
            <div className="limitaRodape">
                <p className="paragrafoLight">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                <div className="secaoIcons">
                    <img className="icon" src={facebook} alt="facebook" />
                    <img className="icon" src={twitter} alt="twitter" />
                    <img className="icon" src={linkedin} alt="linkedin" />
                    <img className="icon" src={dribble} alt="dribble" />
                    <img className="icon" src={behance} alt="behance" />
                    <img className="icon" src={googlePlus} alt="googlePlus" />
                </div>
            </div>
            <p className="paragrafoLight">Copyright 2023 &copy; <a href="https://github.com/felipesr01" target="_blank">Felipe Souza</a></p>
        </footer>
    )
}