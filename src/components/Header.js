import React from 'react'

export default function Header() {
    return (
        <div className="header__wrapper">
            <div className="center__container">
                {/* <div className="header__content_container"> */}
                    <div className="header__picture_container">
                        <div className="header__image"></div>
                        {/* // <img src="'../../assets/_I1P1973-kopia.jpg'" alt="Danusia rgb clo- Sztuka Trawienia"/> */}
                    </div>
                    <div className="header__info_container">
                        <h1>Wspieram Twoją Równowagę</h1>
                        <div className="title__bottom"></div>
                        <p>Dbam o to aby Twoje pożywienie było lekarstwem dla Twojego ciała, duszi i umysłu</p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}
