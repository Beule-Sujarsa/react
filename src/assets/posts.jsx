import React from 'react';

const posts = [
  {
    id: 1,
    username: 'john_doe',
    profile: 'https://i.pravatar.cc/100?img=12',
    image:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600',
    likes: 120,
    caption: 'Beautiful nature 🌄 #Nature',
  },
  {
    id: 2,
    username: 'alex_morgan',
    profile: 'https://i.pravatar.cc/100?img=11',
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