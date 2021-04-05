import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import './AddProfilePicComponent.css';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';

function AddProfilePicComponent({ picture, setPicture }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setPicture(acceptedFiles[0]);
    },
    [setPicture],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className='cardbody'>
      <div {...getRootProps()} className='outlineNone'>
        <input {...getInputProps()} accept='image/png, image/jpeg' />
        {picture.name ? (
          <img
            alt='Uploaded'
            className='profilepic uploadProfilePic'
            src={URL.createObjectURL(picture)}
          />
        ) : (
          <div className='uploadProfilePic profilepic'>
            <CameraAltRoundedIcon
              style={{ fontSize: 80 }}
              className='uploadPicIcon'
            />
            <p className='addUserText'>
              Click or drop an image <br />
              to add a picture
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddProfilePicComponent;
