import React from 'react';

const suggestedUsers = [
  {
    id: 1,
    username: 'emma_wilson',
    profile: 'https://i.pravatar.cc/100?img=44',
    followedBy: 'Followed by other users',
  },
 
];

function Suggestions() {
  return (
    <div className="suggestions">
      <h3>Suggestions For You</h3>

      {suggestedUsers.map((user) => (
        <div className="suggested-user" key={user.id}>
          <img src={user.profile} alt={user.username} />

          <div className="suggested-user-info">
            <strong>{user.username}</strong>
            <span>{user.followedBy}</span>
          </div>

          <button className="follow-button">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;