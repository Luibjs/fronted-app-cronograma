import { useContext, useEffect, useState } from "react";
import { Calendar } from "../../components/share/calendar/Calendar";
import { Title } from "../../components/share/Title";
import { Assign } from "../../context/assign";
import { ButtonsContainer } from "../..//components/share/ButtonsContainer";
import { BtnPrev } from "../../components/share/BtnPrev";
import { BtnNext } from "../../components/share/BtnNext";
import { ContainerInputs } from "../../components/date/ContainerInputs";
import { Navigate } from "react-router-dom";
import { useConsult } from "../../hooks/useConsult";

export function Date() {
  //asignaciones por ficha
  const { dataAssign } = useContext(Assign);
  const Nficha = dataAssign.ficha.numero;
  const { data, loading} = useConsult(
    "api/asignaciones/ficha/" + Nficha + "/"
  );

  const rap = dataAssign.rap.id

  if (!rap) {
    return <Navigate to={"/assign/rap"}/>
  }
  return (
    <>
      <Title text={"Agendamiento de Fechas:"} />
      <div className="mt-[30px] mb-[50px] flex flex-col md:flex-row gap-[45px] md:items-center">
        <div className="md:w-[50%] ">
          {!loading && <Calendar events={data} />}
        </div>
        <div className="md:w-[50%]">
          <ContainerInputs/>
        </div>
      </div>
      <ButtonsContainer>
        <BtnPrev prevPage="/assign/rap" />
        <BtnNext nextPage={"/assign/instructor"} desactivate={dataAssign.fechaInicio && dataAssign.fechaFin ? false : true} />
      </ButtonsContainer>
    </>
  );
}
