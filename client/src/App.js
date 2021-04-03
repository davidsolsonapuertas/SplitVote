import { useRef, useState, useEffect } from 'react';

import './App.css';
import Card from './components/CardComponent/CardComponent';
import AddClient from './components/AddClientComponent/AddClientComponent';
import Header from './components/HeaderComponent/HeaderComponent';
import mockdata from './mockdata';
import { moveItem } from './service/ModifyDataService';

function App() {
  const [data, setData] = useState(mockdata);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

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
                  className='weekday'
                  onDragEnter={() => onDragEnter(groupIndex)}
                >
                  <p>{group.title}</p>
                  {group.users.map((user, userIndex) =>
                    draggableDiv(user, userIndex, groupIndex),
                  )}
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
