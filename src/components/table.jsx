import React, { useState, useEffect } from "react";
import "./table.css";

export default function Table({ pacientData }) {
  const [pacientList, setPacientList] = useState(pacientData);
  const [upadateList, setUpadateList] = useState(true);

  function calcIMC() {
    let pacientListAux = pacientList;

    pacientListAux.forEach((pacient) => {
      // pacient.imc += 10;
      pacient.imc = (pacient.peso / (pacient.altura * pacient.altura)).toFixed(
        2
      );
      //to fixed é apenas para realizar o arredondadmento
    });
    setPacientList(pacientListAux);
  }

  useEffect(() => {
    calcIMC();
  }, [upadateList]); //se estiver com warning, nao se preecupe, NESSE CASO ficou assim mesmo

  return (
    <>
      <h1>Tabela com os Dados ->> </h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Peso(kg)</th>
            <th>Altura(m)</th>
            <th>Gordura Corporal(%)</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody id="tabela-pacientes">
          {pacientList.map((paciente, key) => (
            <tr className="paciente" id="primeiro-paciente" key={key}>
              <td className="info-nome">{paciente.nome}</td>
              <td className="info-peso">{paciente.peso}</td>
              <td className="info-altura">{paciente.altura}</td>
              <td className="info-gordura">{paciente.gordura}</td>
              <td className="info-imc">{paciente.imc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          setUpadateList(!upadateList);
        }}
      >
        Caclular imc
      </button>
    </>
  );
}
