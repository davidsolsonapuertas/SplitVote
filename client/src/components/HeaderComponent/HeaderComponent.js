import React from 'react';
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';

import logo from '../../assets/logo.png';
import './HeaderComponent.css';

function Header() {
  return (
    <div className='header'>
      <a href='/'>
        <img src={logo} className='logoheader' alt='Split pets logo' href='/' />
      </a>
      <h1>HOME</h1>
      <NotesRoundedIcon className='headericon' fontSize='large' />
    </div>
  );
}

export default Header;
