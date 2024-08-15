import { useState } from "react";

import { mock } from "../../helpers";

import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";

type ModalRegFormProps = {
  onClose: () => void;
};

const ModalRegForm = ({ onClose }: ModalRegFormProps) => {
  const [name, setName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleChangeName = (value: string) => setName(value);
  const handleChangeSecondName = (value: string) => setSecondName(value);
  const handleChangePhone = (value: string) => setPhone(value);

  return (
    <Modal onClose={onClose} title="Зв'язатися з менеджером">
      <Input
        value={secondName}
        onChange={handleChangeSecondName}
        label="Прізвище"
        placeholder="Фещенко, Романов...."
      />
      <Input
        value={name}
        onChange={handleChangeName}
        label="Ім'я"
        placeholder="Олег, Анна...."
      />
      <Input
        value={phone}
        onChange={handleChangePhone}
        label="Номер телефону"
        placeholder="+380 50 140 78 80"
      />
      <Button text="Надіслати" type="DASHED" onClick={mock} />
    </Modal>
  );
};

export default ModalRegForm;
