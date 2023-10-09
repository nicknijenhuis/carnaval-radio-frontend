"use client";
import React, { useState, HTMLProps } from 'react';

interface ImageWithFallbackProps extends HTMLProps<HTMLImageElement> {
    src: string;
    fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            {...rest}
            loading='lazy'
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback;