import { useState } from "react";

import MainSegment from "../../components/MainSegment";
import Footer from "../../components/Footer";

import InfoSegment from "../../components/InfoSegment";
import ModalRegForm from "../../components/ModalRegForm";
import Header from "../../components/Header";
import TeachersSegment from "../../components/TeachersSegment";
import EduMapSegment from "../../components/EduMapSegment";

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
      <EduMapSegment />
      {isOpenModal && <ModalRegForm onClose={handleOpenModal} />}
      <Footer />
    </>
  );
};

export default Mainpage;
