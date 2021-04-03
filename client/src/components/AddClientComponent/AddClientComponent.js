import React, { useState } from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import './AddClientComponent.css';
import AddProfilePicComponent from '../AddProfilePicComponent/AddProfilePicComponent';
import { addUser } from '../../service/ModifyDataService';

const initialFormData = {
  name: '',
  pet: '',
};

function AddClient({ setData }) {
  const [addCardOpen, setAddCardOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [picture, setPicture] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length && formData.pet.length) {
      addUser({ ...formData, picture }, setData);
      setFormData(initialFormData);
      setPicture({});
    }
  };

  return (
    <div>
      <div className='card'>
        <div className='addclient'>
          {addCardOpen ? (
            <div className='addUserCard'>
              <div>
                <ClearRoundedIcon
                  fontSize='large'
                  className='icon'
                  onClick={() => setAddCardOpen(false)}
                />
              </div>
              <AddProfilePicComponent
                setPicture={setPicture}
                picture={picture}
              />
              <form className='inputFields'>
                <input
                  onChange={handleChange}
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                />

                <input
                  onChange={handleChange}
                  name='pet'
                  placeholder='Pet type'
                  value={formData.pet}
                />
                <button className='outlineNone' onClick={handleSubmit}>
                  Add
                </button>
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
