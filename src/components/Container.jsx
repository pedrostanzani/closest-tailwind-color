import React from "react";

const Container = (props) => {
  return (
    <div className={`flex flex-row justify-center px-6 ${props.className}`}>
      <div className="max-w-2xl flex-1">{props.children}</div>
    </div>
  );
};

export default Container;