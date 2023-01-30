const Shimmer = () => {
  return (
    <div className="shim">
      {Array(8)
        .fill("")
        .map((e, index) => {
          return (
            <div className="shim-comp" key={index}>
              <div className="shimmer-photo"></div>
              <div className="shimmer-heading"></div>
              <div className="shimmer-price"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
