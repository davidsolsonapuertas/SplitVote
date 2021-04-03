import React, { useState } from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import './AddClientComponent.css';
import AddProfilePicComponent from '../AddProfilePicComponent/AddProfilePicComponent';

function AddClient() {
  const [addCardOpen, setAddCardOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    pet: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className='card'>
        <div className='cardbody addclient'>
          {addCardOpen ? (
            <div className='addUserCard'>
              <div className='icondiv' onClick={() => setAddCardOpen(false)}>
                <ClearRoundedIcon fontSize='large' className='icon' />
              </div>
              <AddProfilePicComponent />
              <form className='inputField'>
                <label className='inputField'>
                  <p>Name</p>
                  <input
                    onChange={handleChange}
                    name='name'
                    value={formData.name}
                  />
                </label>
                <label className='inputField'>
                  <p>Pet</p>
                  <input
                    onChange={handleChange}
                    name='pet'
                    value={formData.pet}
                  />
                </label>
                <button onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          ) : (
            <div className='cardinfo'>
              <AddCircleRoundedIcon
                className='iconplus margintop40'
                style={{ fontSize: 90 }}
                onClick={() => setAddCardOpen(true)}
              />
              <h2>Add user</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddClient;
