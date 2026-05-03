import Lottie from "lottie-react";
import loadingAnim from "../../assets/loading.json";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Lottie animationData={loadingAnim} />
    </div>
  );
};

export default LoadingPage;
