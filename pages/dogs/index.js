import React, { useState, useEffect } from "react";

function RandomDogImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDogImage() {
      // Mark the api loading
      setLoading(true);
      try {
        // Fetch from the api
        const response = await fetch("/api/demo");
        if (!response.ok) {
          // If there's an error, throw it to the catch block
          throw new Error("Failed to fetch image");
        }
        // If no error, get the data from response
        const data = await response.json();
        setImageUrl(data.message);
        setError(null);
      } catch (error) {
        // If there's an error, update the error state
        setError(error.message);
      } finally {
        // At the end, mark the loading state false
        setLoading(false);
      }
    }

    fetchDogImage();
  }, []);

  return (
    <div>
      {loading && <p>Loading image...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="A random dog"
          style={{ width: "150px", height: "150px" }}
        />
      )}
    </div>
  );
}

export default RandomDogImage;
