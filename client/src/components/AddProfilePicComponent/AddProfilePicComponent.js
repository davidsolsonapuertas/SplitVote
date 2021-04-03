import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import './AddProfilePicComponent.css';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';

function AddProfilePicComponent() {
  const [file, setFile] = useState({});
  const onDrop = useCallback((acceptedFile) => {
    console.log(acceptedFile);
    setFile(acceptedFile);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className='cardbody'>
      <div className='uploadProfilePic' {...getRootProps()}>
        <input {...getInputProps()} />
        <CameraAltRoundedIcon
          style={{ fontSize: 80 }}
          className='uploadPicIcon'
        />
        <p className='addUserText'>
          Click or drop an image <br />
          to add a picture
        </p>
      </div>
    </div>
  );
}

export default AddProfilePicComponent;
