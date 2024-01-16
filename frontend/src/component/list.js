import React, { useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, url: 'https://example.com/image1.jpg', caption: 'Caption 1' },
    { id: 2, url: 'https://example.com/image2.jpg', caption: 'Caption 2' },
    // Add more images as needed
  ]);

  const [newImage, setNewImage] = useState({ url: '', caption: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage({ ...newImage, [name]: value });
  };

  const handleAddImage = () => {
    setImages([...images, { ...newImage, id: images.length + 1 }]);
    setNewImage({ url: '', caption: '' });
  };

  const handleDeleteImage = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  return (
    <div>
      <h1>Image Gallery</h1>

      {/* Add Image Form */}
      <div>
        <input
          type="text"
          name="url"
          placeholder="Image URL"
          value={newImage.url}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="caption"
          placeholder="Image Caption"
          value={newImage.caption}
          onChange={handleInputChange}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>

      {/* Image List */}
      <div>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.caption} />
            <p>{image.caption}</p>
            <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
