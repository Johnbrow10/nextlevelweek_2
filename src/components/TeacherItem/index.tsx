import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/94257868_2817834761666800_2487934654603067392_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=UjJVG5SHTeIAX9B6sAW&_nc_ht=scontent-gru1-1.xx&oh=829863e6f85fbb6d1fc45815120ad002&oe=5F568B84" alt="JOhnbrow"/>
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