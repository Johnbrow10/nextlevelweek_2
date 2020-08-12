import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponí veis">
            <form id="search-teachers">
               <Input name="subject" label="Matéria"/>
               <Input name="week_day" label="Dia da Semana"/>
               <Input type="time" name="time" label="Hora"/>
            </form>
            </PageHeader>

        <main>
          
        </main>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/> 
        </div>
    )
}

export default TeacherList;