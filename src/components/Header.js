import React from 'react'
import Search from './Search'
import logo from '../cocktail.svg'
function Header() {
    return (
        <header>
            <div className="header-top">
                <Search />
            </div>
            <div className="logo">
                <img src={logo} alt=""/>
                <h2>Beverage Catalogue</h2>
            </div>
        </header>
    )
}

export default Header
