const RecentSongsLoading = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      {arr.map((_, i) => (
        <div key={i} className="flex flex-col">
          <div className="flex items-center justify-between p-2 bg-gray-200 animate-pulse">
            <div className="flex space-x-3">
              <div className="h-9 w-9 rounded-full bg-gray-100"></div>
              <div className="flex flex-col gap-1">
                <div className="h-7 w-[200px] bg-gray-100 rounded-md"></div>
                <div className="h-4 w-24 bg-gray-100 rounded-md"></div>
              </div>
            </div>
            <div className={`py-4 px-8 rounded-full bg-greenShade_1`}></div>
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
        </div>
      ))}
    </>
  );
};

export default RecentSongsLoading;
