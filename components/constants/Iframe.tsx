"use client";
import React, { useEffect } from "react";

const IframeComponent = ({ src, height = 2000 }: { src: string, height?: number }) => {
    const iframeId = `ticket-iframe-${Math.floor(Math.random() * 10000)}`;

    useEffect(() => {
        const iframe: any = document.querySelector(`#${iframeId}`);

        const messageListener = (e: any) => {
            const message = e.data;

            if (iframe === null) return;

            iframe.style.height = message.height + 'px';
            iframe.style.width = message.width + 'px';
        };

        window.addEventListener('message', messageListener, false);

        return () => {
            window.removeEventListener('message', messageListener);
        };
    }, [iframeId]);

    return (
        <iframe
            id={iframeId}
            src={src}
            width="100%"
            height={height}
            allowFullScreen={true}
        ></iframe>
    );
};

export default IframeComponent;
