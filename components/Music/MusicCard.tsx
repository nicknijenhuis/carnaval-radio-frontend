import React from "react";

const MusicCard = () => {
  return (
    <div className=" group cursor-pointer overflow-hidden bg-white">
      <img className="h-60 w-full object-cover" src={"https://images.unsplash.com/photo-1615185990787-0c2561e830e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"} alt="" />
      <div className="pt-5 px-2 pb-2">
        <div>
          <p className="text-lg font-semibold">Tega - Music</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
