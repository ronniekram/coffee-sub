import React, { useState } from 'react';
import { ReactComponent as Hamburger } from '../../assets/shared/mobile/icon-hamburger.svg';
import { ReactComponent as CloseMenu } from '../../assets/shared/mobile/icon-close.svg';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import '../../assets/styles/layout/nav.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container">

      <div className="logo">
        <Logo />
      </div>

      <div className="links">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CREATE YOUR PLAN</li>
        </ul>
      </div>

      <div className="mobile-links">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CREATE YOUR PLAN</li>
        </ul>
      </div>

    </nav>
  );
};

export default NavBar;
