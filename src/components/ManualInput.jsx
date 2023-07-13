import React from "react";

const ManualInput = (props) => {
  return (
    <div>
      <form
        className={`flex flex-row items-stretch overflow-hidden rounded-lg text-sm ${
          props.invalidColor ? "mb-1.5 outline outline-yellow-600" : "mb-3"
        }`}
        onSubmit={props.handleGo}
      >
        <input
          className="flex-1 rounded-bl-lg rounded-tl-lg border-b border-l border-t border-slate-200 bg-transparent p-1.5 pl-2 outline-none"
          type="text"
          value={props.goTo}
          onChange={props.handleInputChange}
        />
        <input
          className="flex cursor-pointer flex-col justify-center bg-slate-700 p-2.5 text-white"
          type="submit"
          value="Go"
        />
      </form>
      {props.invalidColor ? (
        <p className="mb-3 text-sm font-semibold text-yellow-600">
          Invalid color!
        </p>
      ) : null}
    </div>
  );
};

export default ManualInput;
