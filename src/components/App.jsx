import Profile from './Profile/Profile';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
