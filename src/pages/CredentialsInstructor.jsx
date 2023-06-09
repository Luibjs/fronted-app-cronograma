import { useContext, useState } from "react";
import { createInst } from "../context/createInst";
import { Link } from "react-router-dom";
import { Input } from "../components/CompetencyInstructor/Input";
import { BtnIsAdmin } from "../components/CompetencyInstructor/BtnIsAdmin";
import { BtnNext } from "../components/share/BtnNext";
import { ButtonsContainer } from "../components/share/ButtonsContainer";
import { PrevArrow } from "../components/share/PrevArrow";

export function CredentialsInstructor() {
  const { instData, setInstructorData } = useContext(createInst);
  const [isAdmin, setIsAdmin] = useState(instData.admin);
  const [valueInputs, setValueInputs] = useState({
    documento: instData.documento,
    nombreCompleto: instData.nombreCompleto,
  });

  function handleValueInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setValueInputs({
      ...valueInputs,
      [name]: value,
    });

    setInstructorData({
      [name]: value,
    });
  }

  function handleIsAdmin() {
    const admin = !isAdmin;
    setIsAdmin(!isAdmin);
    setInstructorData({
      admin: admin,
    });
  }

  return (
    <>
      <div className="w-[80%] mx-auto mt-[20px]">
        <PrevArrow />
      </div>
      <div className="w-[80%] mx-auto h-[60vh] flex items-center">
        <div className="flex flex-col w-[80%] max-w-[600px] mx-auto gap-[15px]">
          <h3 className="text-center text-[18px] font-bold md:text-[23px]">
            Crear Instructor
          </h3>
          <Input
            value={valueInputs.nombreCompleto}
            name={"nombreCompleto"}
            handleChange={handleValueInput}
            type={"text"}
            placeholder="Nombre Completo"
          />
          <Input
            value={valueInputs.documento}
            name={"documento"}
            handleChange={handleValueInput}
            type={"number"}
            placeholder="Documento"
          />
          <div>
            <BtnIsAdmin isAdmin={isAdmin} handleIsAdmin={handleIsAdmin} />
          </div>
        </div>
        <ButtonsContainer>
          <div></div>
          <BtnNext nextPage="/instructor/competencia" />
        </ButtonsContainer>
      </div>
    </>
  );
}
