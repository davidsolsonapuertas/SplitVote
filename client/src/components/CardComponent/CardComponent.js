import React from 'react';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import { deleteUser } from '../../service/ModifyDataService';
import './CardComponent.css';

function Card({ user, setData }) {
  return (
    <div draggable key={user.username} className='card'>
      <div>
        <ClearRoundedIcon
          fontSize='large'
          className='icon'
          onClick={() => deleteUser(user.username, setData)}
        />
      </div>
      <div className='cardbody'>
        <img
          src={user.picture}
          className='profilepic'
          alt={user.username}
          draggable={false}
        />
        <div className='cardinfo'>
          <h2>{user.username}</h2>
          <h3>{user.pet}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
