import { cloud_name, upload_preset } from '../config';
import Resizer from 'react-image-file-resizer';

export const moveItem = (group, user, setData) => {
  const data = JSON.parse(localStorage.getItem('data'));
  data?.forEach(
    (day) =>
      (day.users = day.users.filter(
        (userData) => userData.username !== user.username,
      )),
  );
  data[group].users.push(user);
  localStorage.setItem('data', JSON.stringify(data));
  setData(data);
};

export const deleteUser = (username, setData) => {
  const data = JSON.parse(localStorage.getItem('data'));
  data?.forEach(
    (day) =>
      (day.users = day.users.filter((user) => user.username !== username)),
  );
  localStorage.setItem('data', JSON.stringify(data));
  setData(data);
};

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      600,
      600,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64',
    );
  });

const compressImage = async (picture) => {
  try {
    const file = await resizeFile(picture);
    return file;
  } catch (error) {
    console.log(error);
  }
};

const uploadImage = async (picture) => {
  const formData = new FormData();
  formData.append('file', picture);
  formData.append('upload_preset', upload_preset);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async ({ name, pet, picture }, setData) => {
  let pictureUrl;
  if (picture.name) {
    const compressedImage = await compressImage(picture);
    const uploadedImage = await uploadImage(compressedImage);
    pictureUrl = uploadedImage.secure_url;
  }

  const urlNoPicture =
    'https://res.cloudinary.com/dcbacnafu/image/upload/v1617479326/r9hcfp5g1c0g3vtkpxbw.jpg';

  const data = JSON.parse(localStorage.getItem('data'));

  const usernameTaken = data.map((day) =>
    day.users.filter((user) => user.username === name),
  );

  if (!usernameTaken.flat().length) {
    const newUser = {
      picture: pictureUrl || urlNoPicture,
      username: name,
      pet,
    };

    data[0].users.push(newUser);
    localStorage.setItem('data', JSON.stringify(data));
    setData(data);
  } else {
    alert('Username is already taken');
  }
};
