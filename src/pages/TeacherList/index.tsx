import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponí veis">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}

                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}

                    />

                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>

            </main>
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
        </div>
    )
}

export default TeacherList;