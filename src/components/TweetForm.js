import React, { useState, useEffect } from 'react';

function TweetForm({ onSubmit, initialTweet }) {
  const [tweet, setTweet] = useState(initialTweet);

  useEffect(() => {
    setTweet(initialTweet);
  }, [initialTweet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tweet);
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Tweet:
        <input
          type="text"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          required
        />
      </label>
      <button type="submit">{initialTweet ? 'Update' : 'Submit'}</button>
    </form>
  );
}

export default TweetForm;
