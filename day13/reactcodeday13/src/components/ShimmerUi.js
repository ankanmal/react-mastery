const Shimmer = () => {
  return (
    <div className="flex  flex-wrap px-5 mb-16">
      {Array(8)
        .fill("")
        .map((e, index) => {
          return (
            <div className="h-52 mt-6 p-2 mx-2 " key={index}>
              <div className="bg-[#eef3f5] w-60 h-40 mt-14"></div>
              <div className="bg-[#eef0f5] h-3 w-32 mt-5"></div>
              <div className="bg-[#eef0f5] mt-3 w-24 h-2"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
