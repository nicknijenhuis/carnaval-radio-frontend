"use client";

interface VideoProps {
    src: string;
    className?: string;
  }

const Video: React.FC<VideoProps> = ({ src, className }) => {
    return (
      <video
        controls
        controlsList="nofullscreen"
        src={src}
        className={className}
        style={{ width: '100%', height: 'auto' }}
      />
    );
  };

export default Video;