import React from 'react';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import { deleteUser } from '../service/ModifyDataService';

function Card({ user, setData }) {
  return (
    <div draggable key={user.username} className='card'>
      <div
        className='icondiv'
        onClick={() => deleteUser(user.username, setData)}
      >
        <ClearRoundedIcon fontSize='large' className='icon' />
      </div>
      <div className='cardbody'>
        <img
          src={`http://localhost:5000/static/${user.picture}`}
          className='profilepic'
          alt={user.username}
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
