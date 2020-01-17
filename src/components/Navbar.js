import React from 'react';
import Hamburger from './Hamburger';

const Navbar = props => {


        return (
            <div className="nav__wrapper">
                <div className="nav__center__container">
                    <div className="logo__container">
                        {/* <img src=""></img> */}
                        {/* <h1>Danusia</h1> */}
                    </div>
                    <div className="menu__holder">
                        <ul>
                            <li><a href="#">O mnie</a></li>
                            <li><a href="#">Konsultacje</a></li>
                            <li><a href="#">Warsztaty</a></li>
                            <li><a href="#">Sklep</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                        <Hamburger click={props.hamburgerHandler}/>
                    </div>
                </div>
            </div>
        )
    
}

export default Navbar;