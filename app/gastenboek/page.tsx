"use client";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    document.title = "Gastenoek | 24/7 Vasteloavend Muzieek";
  }, []);
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-primary">Gastenboek</h2>
    </div>
  );
};

export default page;
