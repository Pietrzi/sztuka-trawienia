import React from 'react';

const sideDrawer = props => {

    let drawerClasses = 'side__drawer'
    if (props.show) {
      drawerClasses = 'side__drawer open'
    }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">O mnie</a>
        </li>
        <li>
          <a href="/">Konsultacje</a>
        </li>
        <li>
          <a href="/">Warsztaty</a>
        </li>
        <li>
          <a href="/">Sklep</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Kontakt</a>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer;