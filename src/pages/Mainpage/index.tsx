import { useState } from "react";

import MainSegment from "../../components/MainSegment";
import Header from "../../components/Header";
import InfoSegment from "../../components/InfoSegment";
import ModalRegForm from "../../components/ModalRegForm";

const Mainpage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <Header />
      <MainSegment openModal={handleOpenModal} />
      <InfoSegment />
      {isOpenModal && <ModalRegForm onClose={handleOpenModal} />}
    </>
  );
};

export default Mainpage;
