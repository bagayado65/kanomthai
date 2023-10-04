import React, { useState } from 'react';

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const maxLength = 100;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <div className="read-more">
      <p className={isReadMore ? 'expanded' : ''}>{isReadMore ? text : truncatedText}</p>
      {text.length > maxLength && (
        <button onClick={toggleReadMore}>
          {isReadMore ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;