import './App.css';
import Card from './components/Card';
import logo from './assets/logo.png';
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';
import AddClient from './components/AddClient';

const data = [
  {
    title: 'Not booked',
    users: [
      {
        username: 'Andrew Spencer',
        pet: 'Dog',
        picture: 'pic1.jpg',
      },
      {
        username: 'Raj Raghrum',
        pet: 'Cat',
        picture: 'pic2.jpg',
      },
      {
        username: 'Mary Peters',
        pet: 'Dog',
        picture: 'pic3.jpg',
      },
    ],
  },
  { title: 'Monday', users: [] },
  { title: 'Tuesday', users: [] },
  { title: 'Wednesday', users: [] },
  { title: 'Thursday', users: [] },
  { title: 'Friday', users: [] },
];

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <a href='/'>
          <img
            src={logo}
            className='logoheader'
            alt='Split pets logo'
            href='/'
          />
        </a>
        <h1>HOME</h1>
        <NotesRoundedIcon className='headericon' fontSize='large' />
      </div>
      <div className='dashboard'>
        <div>
          <h1>Users selling now</h1>
          <div className='unordered'>
            {data[0].users.map((user, userIndex) => (
              <Card user={user} userIndex={userIndex} />
            ))}
            <AddClient />
          </div>
        </div>
        <div className='weekdays'>
          {data.map((group, groupIndex) => {
            return (
              groupIndex !== 0 && (
                <div key={group.title} className='weekday'>
                  <p>{group.title}</p>
                  {group.users.map((user, userIndex) => (
                    <Card user={user} userIndex={userIndex} />
                  ))}
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
