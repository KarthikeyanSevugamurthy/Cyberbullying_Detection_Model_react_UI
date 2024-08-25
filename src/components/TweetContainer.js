import React, { useState, useEffect } from 'react';
import TweetForm from './TweetForm';
import TweetDisplay from './TweetDisplay';

function TweetContainer() {
  const [tweets, setTweets] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Load tweets from localStorage when component mounts
  useEffect(() => {
    console.log('Component Mounted');
    const savedTweets = localStorage.getItem('tweets');
    if (savedTweets) {
      setTweets(JSON.parse(savedTweets));
    }
  }, []); 

  // Save tweets to localStorage whenever tweets state changes
  useEffect(() => {
    console.log('Tweets Updated');
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  // Cleanup before component unmounts
  useEffect(() => {
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  // Handle tweet submission
  const handleTweetSubmit = (tweet) => {
    if (editingIndex !== null) {
      const updatedTweets = tweets.map((t, index) =>
        index === editingIndex ? tweet : t
      );
      setTweets(updatedTweets);
      setEditingIndex(null);
    } else {
      setTweets([...tweets, tweet]);
    }
  };

  // Handle tweet deletion
  const handleTweetDelete = (index) => {
    const updatedTweets = tweets.filter((_, i) => i !== index);
    setTweets(updatedTweets);
  };

  // Handle tweet editing
  const handleTweetEdit = (index) => {
    setEditingIndex(index);
  };

  return (
    <div>
      <TweetForm
        onSubmit={handleTweetSubmit}
        initialTweet={editingIndex !== null ? tweets[editingIndex] : ''}
      />
      <TweetDisplay
        tweets={tweets}
        onDelete={handleTweetDelete}
        onEdit={handleTweetEdit}
      />
    </div>
  );
}

export default TweetContainer;
