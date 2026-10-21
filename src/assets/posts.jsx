import React from 'react';
import profilePic from './images.angu.jpg';
import profilepic from './photo-1519066742-c63a92e02298.avif';

const posts = [
  {
    id: 1,
    username: 'Agaliya',
    profile: profilePic,
    image:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600',
    likes: 120,
    caption: 'Beautiful nature 🌄 #Nature',
  },
  {
    id: 2,
    username: 'Akshaya',
    profile: profilepic,
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600',
    likes: 189,
    caption: 'Peaceful moments 🌿 #Nature',
  },
];

function Posts() {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <img src={post.profile} alt={post.username} />
            <strong>{post.username}</strong>
            <i className="bi bi-three-dots"></i>
          </div>

          <img
            className="post-image"
            src={post.image}
            alt={`Post by ${post.username}`}
          />

          <div className="post-actions">
            <div className="left-actions">
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
            </div>
            <i className="bi bi-bookmark"></i>
          </div>

          <p className="likes">{post.likes} likes</p>

          <p className="caption">
            <strong>{post.username}</strong> {post.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Posts;