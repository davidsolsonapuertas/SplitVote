import React from 'react';

import logo from '../assets/logo.png';
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';

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
