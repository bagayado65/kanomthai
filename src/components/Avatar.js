import React from 'react';

const Avatar = ({ imageUrl, initials, size }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: '10%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    padding: '0px',
    margin: '0px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={avatarStyle}>
      {imageUrl ? (
        <img src={imageUrl} alt="User Avatar" style={imageStyle} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;