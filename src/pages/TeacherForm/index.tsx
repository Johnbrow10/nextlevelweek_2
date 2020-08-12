import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/input';
import Textarea from '../../components/Textarea';

import warningicon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
         <PageHeader title="Que Incrível que você quer dar aulas"
          description="O primeiro passo é preencher esse formulário de incrição"
         /> 
        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input name="name" label="Nome Completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="Biografia"/>
               
            </fieldset>

            <fieldset>
                <legend>Sobre a Aula</legend>
                <Input name="subject" label="Matéria"/>
                <Input name="cost" label="Custo da sua hora por aula"/>
            </fieldset>

            <footer>
                <p>
                    <img src={warningicon} alt="Aviso Importante"/>
                    Importante! <br/>
                    Preencha todos os dados
                </p>
                <button type="button">Salvar Cadastro</button>
            </footer>
        </main>

     </div>
    )
}

export default TeacherForm;