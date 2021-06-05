import React from 'react';
import './styles/leftSection.css'
import profilePicture from './img/profilePicture.jpg'

function LeftSection() {
    return(
        <div className="container__left">
            <div>
                <h1 className="logo__name">facebook</h1>
                <h2>Logins recentes</h2>
                <p>Clique na sua foto ou adicione uma conta</p>
            </div>
            <div className="container__login">
                <div className="recent__login">
                    <div>
                        <div className="recent__login--erase"><a className="recent__login--eraseX">x</a></div>
                    <img src={profilePicture} className="recent__login--profilePicture"></img>
                    </div>
                    <div><p>Jefferson</p></div>
                </div>
                <div>
                    <div className="recent__login">
                        <div className="recent__login--add"><div className="recent__login--sign">+</div></div>
                        <div><p>Adicionar conta</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;