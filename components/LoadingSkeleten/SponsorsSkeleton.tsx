const SponsorsSkeleton = () => {
    const arr = [1, 2, 3, 4];
  
    return (
      <div className="flex items-center gap-4 my-6 ">
        {arr.map((_, index) => (
          <div
            key={index}
            className="h-[150px] w-[250px] bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    );
  };

  export default SponsorsSkeleton;