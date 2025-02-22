import ClimbingBox from "react-spinners/ClimbingBoxLoader";

const MovieLoading = () => {
  return (
    <div className="sweet-loading flex justify-center my-5 py-5">
      <ClimbingBox speedMultiplier={2} color="#fff" />
    </div>
  );
};

export default MovieLoading;
