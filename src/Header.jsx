import React from 'react';
import './Header.css';
import img from './logotrans.png';

function Header(){
    return(
        <div className="header">
        <img className="logo" src={img} />
        <h3 className="title">Zhero</h3>
        </div>
    );
}

export default Header;