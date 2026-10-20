import React from 'react';
import Navbar from './assets/navbar.jsx';
import Stories from './assets/stories.jsx';
import Posts from './assets/posts.jsx';
import Suggestions from './assets/suggestion.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="feed">
        <Stories />
        <Posts />
      </main>

      <Suggestions />
    </div>
  );
}

export default App;