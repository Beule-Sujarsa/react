import React from 'react';

const stories = [
  {
    id: 1,
    username: 'your_story',
    profile: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: 2,
    username: 'john_doe',
    profile: 'https://i.pravatar.cc/100?img=11',
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