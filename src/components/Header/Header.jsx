import React from "react";

import "./Header.css";

import iconInstagram from "../../../public/icons/instagram-24.png";
import iconDiscord from "../../../public/icons/discord-24.png";
import iconGitHub from "../../../public/icons/github-24.png";

import { Link } from "react-router-dom";

function Header(props) {

    const { foto, nome, cargo } = props.informacoes;

    return (
        <header>
            <div>
                <div className="profile">
                    <img src={foto} alt="Foto de rosto de Anderson"/>
                    <h1 id="nome-perfil">{nome}</h1>
                </div>
                <div className="menu">
                    <Link to="/" className="button">CURRÍCULO</Link>
                    <Link to="/portfolio" className="button">PORTFÓLIO</Link>
                    <Link to="/contato" className="button">CONTATO</Link>
                </div>
            </div>          
            <div className="subheader">
                <div className="info">
                    <h3 id="eventoSubtitulo">{cargo}</h3>
                </div>
                <div className="social-midia">
                    <a href="https://www.instagram.com/din.serafim/" target="_blank">
                        <img src={iconInstagram} alt="Instagram" title="Clique para acessar o meu Instagram."/>
                    </a>
                    <a href="https://discord.com/channels/1083855325809090580" target="_blank">
                        <img src={iconDiscord} alt="Discord" title="Clique e seja levado ao seu perfil no Discord, me procure e me adicione: Din.Serafim#0523."/>
                    </a>
                    <a href="https://www.github.com/andersonkgs/" target="_blank">
                        <img src={iconGitHub} alt="GitHub" title="Clique para acessar o meu GitHub."/>
                    </a>
                </div>
            </div>
        </header> 
    ) 
}

export default Header;
