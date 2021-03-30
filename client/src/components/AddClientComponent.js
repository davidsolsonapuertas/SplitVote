import React, { useState } from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

function AddClient() {
  return (
    <div>
      <div className='card'>
        <div className='cardbody addclient'>
          <div className='cardinfo'>
            <AddCircleRoundedIcon
              className='iconplus'
              style={{ fontSize: 90 }}
            />
            <h2>Add user</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
