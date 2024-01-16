"use client";
import React, { useState, useEffect } from "react";

interface props {
  text: string;
}

const FormateTitle = ({ text }: props) => {
  const [isTruncated, setIsTruncated] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsTruncated(window.innerWidth <= 450);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleText = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      {isTruncated && text.length > 18 ? (
        <div>
          {text.slice(0, 18)}
          <button onClick={toggleText}>...</button>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </>
  );
};

export default FormateTitle;
