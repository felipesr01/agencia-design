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
            <img src={logo} alt="logo"/>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
            <div className="secaoIcons">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
                <img src={dribble} alt="dribble" />
                <img src={behance} alt="behance" />
                <img src={googlePlus} alt="googlePlus" />
            </div>
            
        </footer>
    )
}