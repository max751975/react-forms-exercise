import React from "react";

const Box = ({ id, handleRemove, width, height, backgroundColor }) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        className="color-box"
        style={{ height: `${height}em`, width: `${width}em`, backgroundColor }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
};
export default Box;
