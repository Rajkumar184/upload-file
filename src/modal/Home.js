import React, { useState } from "react";
import DemoModal from "./DemoModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        click me
      </button>

      {openModal === true ? <DemoModal setOpenModal={setOpenModal} /> : null}
    </div>
  );
};

export default Home;
