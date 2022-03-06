import React from 'react';
import './Gallery.css';
import imageLinks from '../imageLinks';
import GalleryItems from './GalleryItems';

function Gallery() {
    return (
        <div className='gallery' >
            <div className='galleryContainer'>
                <h6><span> Our </span> Gallery</h6>
                <div className='images'>
                    <div className='imageWrapper'>
                        {imageLinks.map(imgTerm =>
                            <GalleryItems
                                key={imgTerm.id}
                                src={imgTerm.src}
                                alt={imgTerm.alt}
                            />
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery;
