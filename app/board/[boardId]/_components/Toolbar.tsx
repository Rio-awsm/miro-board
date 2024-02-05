import React from "react";

const Toolbar = () => {
  return (
    <div className="absolute translate-y-[60%] top-[50%]  left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>

        <div>Square</div>

        <div>Circle</div>

        <div>Line</div>
      </div>
      <div className="bg-white rounded-md flex flex-col items-center p-1.5 shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export default Toolbar;
