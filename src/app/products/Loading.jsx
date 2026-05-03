import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-[85vh] items-center justify-center">
      Product Loading
      <HashLoader />
    </div>
  );
};

export default Loading;
