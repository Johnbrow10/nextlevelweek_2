import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/2594351/avatar.png?width=90" alt="JOhnbrow"/>
             <div>
                 <strong>Johnatan Dos Santos</strong>
                 <span>JavaScript</span>
             </div>
        </header>
        <p>
            Testando alguma coisa pqp melhor lingua do mundo mas vamos com calma que so sei hello World
        </p>

        <footer>
            <p>
                Preço/Hora 
                <strong>R$ 70,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;