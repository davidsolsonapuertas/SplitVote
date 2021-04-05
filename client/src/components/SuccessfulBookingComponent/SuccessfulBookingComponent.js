import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './SuccessfulBookingComponent.css';
import Card from '../CardComponent/CardComponent';
import Header from '../HeaderComponent/HeaderComponent';

function SuccessfulBookingComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('data')));
  }, []);

  return (
    <div>
      <Header />
      <div className='successfulBookingBody'>
        {data &&
        data.some((day, index) => {
          if (index !== 0) return day.users.length > 0;
          return false;
        }) ? (
          <div>
            <div className='text'>
              <h1>You have successfully booked your appointment!</h1>
              <h2>This is how your week looks like:</h2>
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
                    >
                      <p>{group.title}</p>
                      <div className='weekdayUsers'>
                        {group.users.map((user, userIndex) => (
                          <div draggable key={user.username}>
                            <Card
                              user={user}
                              userIndex={userIndex}
                              setData={setData}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h2>
              You haven't booked any appointment yet! Please click{' '}
              <Link to='/'>here</Link> to book your next appointment
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuccessfulBookingComponent;
