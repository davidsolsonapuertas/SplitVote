import React from 'react';
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';

import logo from '../../assets/logo.png';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <a href='/'>
        <img src={logo} className='logoheader' alt='Split pets logo' href='/' />
      </a>
      <Link to='/'>
        <h1>HOME</h1>
      </Link>
      <NotesRoundedIcon className='headericon icon' fontSize='large' />
    </div>
  );
}

export default Header;
