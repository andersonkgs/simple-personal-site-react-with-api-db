import React, { useState } from "react";

import "./Contact.css";

function Contact() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();

        console.log("Formulário enviado!");
        
        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; // número do WhatsApp para o qual a mensagem será enviada.

        const linkWhatsApp = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsApp, "_blank");
    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/\D/g, "").substring(0, 11);

        let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

        if (textoApenasNumeros.length < 11) {
            telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        }

        setTelefone(telefoneFormatado);
    }
   
    return (
        <main className="content-page">
            <div className="container-contents">
                <div className="contact-message">
                    <strong>Mensagem:</strong>
                    <form onSubmit={enviarFormulario}>
                        <fieldset>
                            <label htmlFor="input-name">Nome:</label>
                            <input
                                type="text"
                                name="input-name"
                                id="input-name" 
                                placeholder="Escreva seu nome completo, por favor."
                                required
                                minLength="2"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-email">E-mail:</label>
                            <input
                                type="email"
                                name="input-email"
                                id="input-email"
                                placeholder="Escreva seu e-mail, por favor."
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-tel">Telefone:</label>
                            <input
                                type="tel"
                                name="input-tel"
                                id="input-tel"
                                placeholder="(99) 99999-9999"
                                required
                                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                                maxLength="15"
                                value={telefone}
                                onChange={mascaraTelefone}
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-msg">Mensagem:</label>
                            <textarea
                                name="input-msg"
                                id="input-msg"
                                cols="50"
                                rows="10"
                                placeholder="Escreva sua mensagem, por favor."
                                value={mensagem}
                                onChange={(event) => setMensagem(event.target.value)}
                            ></textarea>
                        </fieldset>
                        <input className="submit" id="submit-contact" type="submit" value="ENVIAR"/>
                    </form>
                </div>
                <div className="contact-email">
                    <strong>E-mail:</strong>
                    <p><a href="mailto:akgs_7@hotmail.com" title="Clique para redigir um e-mail para mim.">akgs_7@hotmail.com</a></p>
                    <p><a href="mailto:adnkyn@gmail.com" title="Clique para redigir um e-mail para mim.">adnkyn@gmail.com</a></p>
                </div>
                <div className="contact-phone">
                    <strong>Ligação</strong>
                    <p><a href="tel:+5581994950729" title="Clique aqui para ligar para mim.">(81) 9 9495-0729</a></p>
                </div>
            </div>
        </main>
    )
}

export default Contact;
