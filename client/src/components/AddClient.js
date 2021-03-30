import React from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

function AddClient() {
  return (
    <div>
      <div className='card'>
        <div className='cardbody'>
          <div className='cardinfo'>
            <AddCircleRoundedIcon style={{ fontSize: 60 }} />
            <h2>Add user</h2>
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
