import React from "react";

function GalleryItems(props) {
    return (
        <img
            src={props.src}
            alt={props.alt}
        />
    )
}

export default GalleryItems;