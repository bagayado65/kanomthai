import React from "react";
import { useState, useEffect } from "react";
import "./BlobImageStyle.css"

const BlobImage = ({ blobData }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Create a blob from the array of bytes
    const blob = new Blob([new Uint8Array(blobData)], { type: "image/jpeg" });

    // Create a blob URL
    const blobUrl = URL.createObjectURL(blob);

    // Set the blob URL as the source for the image
    setImageSrc(blobUrl);

    // Clean up the blob URL when the component unmounts
    return () => URL.revokeObjectURL(blobUrl);
  }, [blobData]);
  return (
    <div className="profile-post">
      {imageSrc && (
        <img
          className="border-img-post"
          src={imageSrc}
          width="60"
          height="60"
          alt="profile"
        />
      )}
    </div>
  );
};

export default BlobImage;
