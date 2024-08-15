import { useState } from "react";

import MainSegment from "../../components/MainSegment";
import Footer from "../../components/Footer";

import InfoSegment from "../../components/InfoSegment";
import ModalRegForm from "../../components/ModalRegForm";
import Header from "../../components/Header";

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
      <Footer />
    </>
  );
};

export default Mainpage;
