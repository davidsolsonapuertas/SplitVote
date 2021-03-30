import React from 'react';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

function Card({ user }) {
  // const onDragStart = (e) => {
  //   const target = e.target;

  //   e.dataTransfer.setData('card_id', target.id);

  //   setTimeout(() => {
  //     target.style.display = 'none';
  //   }, 0);
  // };

  // const onDragOver = (e) => {
  //   e.stopPropagation();
  // };
  return (
    <div draggable key={user.username} className='card'>
      <div className='icondiv'>
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
