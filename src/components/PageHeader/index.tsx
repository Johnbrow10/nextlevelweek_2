import React from 'react';
import { Link } from 'react-router-dom';

import logoImg  from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

interface PagerHeaderProps {
    title: string;
    description?: string;
}


// nesse PageHeader ele é um React function Componente com as propriedades  de PageHeaderProps 
const PageHeader: React.FC<PagerHeaderProps> = (props)=> {
    return(
        <header className="page-header">
        <div className="top-bar-container">
        <Link to="/">
            <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
            {/* if internal se verifica se tem valor,ai ele traz algo*/}
            {props.description && <p>{props.description}</p>}


            {props.children}
        </div>

    </header>
    );
}

export default PageHeader;