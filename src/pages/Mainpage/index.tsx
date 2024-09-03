import { useState } from "react";

import MainSegment from "../../components/MainSegment";
import Footer from "../../components/Footer";

import InfoSegment from "../../components/InfoSegment";
import ModalRegForm from "../../components/ModalRegForm";
import Header from "../../components/Header";
import TeachersSegment from "../../components/TeachersSegment";

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
      <TeachersSegment />
      {isOpenModal && <ModalRegForm onClose={handleOpenModal} />}
      <Footer />
    </>
  );
};

export default Mainpage;
