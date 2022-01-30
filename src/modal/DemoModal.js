import React from "react";

const DemoModal = ({ setOpenModal }) => {
  return (
    <div>
      <div>hello im modal</div>
      <div>hello im modal</div>
      <div>hello im modal</div>
      <div>hello im modal</div>

      <button onClick={() => setOpenModal(false)}>close modal</button>
    </div>
  );
};

export default DemoModal;
