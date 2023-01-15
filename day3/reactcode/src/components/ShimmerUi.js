import DummyShim from "./DummyShim";
const Shimmer = ({ dummyShimData }) => {
  return (
    <div className="shim">
      {dummyShimData.map((shim) => {
        return <DummyShim key={shim} />;
      })}
    </div>
  );
};

export default Shimmer;
