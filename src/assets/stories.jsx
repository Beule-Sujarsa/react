import React from 'react';

const stories = [
  {
    id: 1,
    username: 'your_story',
    profile: 'src/assets/2437730f7e3a5705e205e67fa2cd1020.jpg',
  },
  {
    id: 2,
    username: 'Akshaya',
    profile: 'src/assets/photo-1519066742-c63a92e02298.avif',
  },
];

function Stories() {
  return (
    <div className="stories">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.profile} alt={story.username} />
          <span>{story.username}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;