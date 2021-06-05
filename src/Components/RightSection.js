import React from 'react';
import './styles/rightSection.css'

function RightSection() {
    return(
        <div className="container__right">
            <div>
                <div className="container__right--inputs">
                    <input className="input--email" type="text" placeholder="Email ou telefone"></input>
                    <div className="login__input">
                    <input className="input--password" type="password" placeholder="Senha"></input>
                    </div>
                    <div className="login__input">
                    <input className="input--button" type="button" value="Entrar"></input>
                    </div>
                    <a href="#">Esqueceu sua senha?</a>
                </div>
            <hr />
                <div>
                    <input className="container__right--newAccount" type="button" value="Criar nova conta"></input>
                </div>
            </div>
            <div><p><a href="#" className="newPage">Criar uma Página</a> para uma celebridade, banda ou empresa.</p></div>
        </div>
    )
}

export default RightSection;