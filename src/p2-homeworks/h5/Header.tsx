import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>PreJun</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Jun</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>JunPLUS</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
