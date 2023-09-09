import React from "react";

const PostsSkeleten = () => {
  const arr = [1, 2, 4];

  return (
    <>
      {arr.map((_, i) => (
        <div
          key={i}
          className={`bg-gray-400 rounded-xl p-5 cursor-pointer overflow-hidden space-y-5 `}
        >
          <div className="h-60 w-[98%] rounded-xl bg-gray-100 animate-pulse"></div>
          <p className="h-10 w-1/2 bg-gray-200 rounded-md animate-pulse"></p>
          <div className="mt-2 bg-gray-400">
            <p className="mb-1 h-6 bg-gray-200 rounded-md animate-pulse"></p>
            <p className="mb-1 h-6 bg-gray-200 rounded-md animate-pulse"></p>
            <p className="mb-1 h-6 bg-gray-200 rounded-md animate-pulse"></p>
            <p className="mb-1 h-6 bg-gray-200 rounded-md animate-pulse"></p>
          </div>
          <div className="h-12 bg-gray-200 border border-gray-500 rounded-md animate-pulse"></div>
        </div>
      ))}
    </>
  );
};

export default PostsSkeleten;
