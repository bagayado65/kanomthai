import React, { useState } from 'react';


const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button onClick={toggleTruncate}>
          {isTruncated ? 'Read more' : 'Read less'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;