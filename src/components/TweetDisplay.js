import React from 'react';

function TweetDisplay({ tweets, onDelete, onEdit }) {
  return (
    <div>
      <h2>Submitted Tweets</h2>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>
            {tweet}{' '}
            <button onClick={() => onEdit(index)}>Edit</button>{' '}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetDisplay;
