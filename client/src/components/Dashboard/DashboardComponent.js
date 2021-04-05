import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './DashboardComponent.css';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import Card from '../CardComponent/CardComponent';
import AddClient from '../AddClientComponent/AddClientComponent';
import Header from '../HeaderComponent/HeaderComponent';
import mockdata from '../../mockdata';
import { moveItem } from '../../service/ModifyDataService';

function Dashboard() {
  const [data, setData] = useState(mockdata);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify(mockdata));
    } else {
      setData(JSON.parse(localStorage.getItem('data')));
    }
  }, []);

  const onDragStart = (e, userObject) => {
    dragItem.current = userObject;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', onDragEnd);
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener('dragend', onDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const onDragEnter = (groupIndex) => {
    if (dragging) {
      moveItem(groupIndex, dragItem.current.user, setData);
    }
  };

  const draggableDiv = (user, userIndex) => {
    return (
      <div
        draggable
        key={user.username}
        onDragStart={(e) => onDragStart(e, { user, userIndex })}
      >
        <Card user={user} userIndex={userIndex} setData={setData} />
      </div>
    );
  };

  const bookAppointment = () => {
    const atLeastOneUserBooked = data.some((day, index) => {
      if (index === 0) return false;
      return day.users.length > 0;
    });

    if (atLeastOneUserBooked) {
      history.push('/successfulbooking');
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='dashboard'>
        <div>
          <h2>Users selling now</h2>
          <div className='unordered' onDragEnter={() => onDragEnter(0)}>
            {data[0].users.map((user, userIndex) =>
              draggableDiv(user, userIndex),
            )}
            <AddClient setData={setData} />
          </div>
        </div>
        <div className='weekdays'>
          {data.map((group, groupIndex) => {
            return (
              groupIndex !== 0 && (
                <div
                  key={group.title}
                  className={
                    group.users.length > 1 ? 'weekday' : 'weekday oneUser'
                  }
                  onDragEnter={() => onDragEnter(groupIndex)}
                >
                  <p>{group.title}</p>
                  <div className='weekdayUsers'>
                    {group.users.map((user, userIndex) =>
                      draggableDiv(user, userIndex, groupIndex),
                    )}
                  </div>
                </div>
              )
            );
          })}
          <div className='sendDiv' onClick={bookAppointment}>
            <SendRoundedIcon className='sendIcon' style={{ fontSize: 80 }} />
            <p>Book your appointment!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
