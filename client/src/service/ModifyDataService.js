export const moveItem = (group, user, setData) => {
  const data = JSON.parse(localStorage.getItem('data'));
  data?.forEach(
    (day) =>
      (day.users = day.users.filter(
        (userData) => userData.username !== user.username,
      )),
  );
  console.log(user);
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
