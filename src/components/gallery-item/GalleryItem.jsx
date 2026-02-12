import React from 'react';

const GalleryItem = ({ src, title, description, className }) => {
    return (
        <div className={`gallery-item ${className}`}>
            <img className="img" src={src} alt={title} title={description} />
        </div>
    );
};

export default GalleryItem;
