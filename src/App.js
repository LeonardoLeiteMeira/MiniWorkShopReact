import React from "react";
import "./App.css";
import Table from "./components/table";
import PacienteAPI from "./repository/paciente.api";
import Hooks from "./components/reactHooks";

function App() {
  const pacienteList = PacienteAPI();

  return (
    <>
      <h1>Work shop de react</h1>
      <Table pacientData={pacienteList} />
      <Hooks />
    </>
  );
}

export default App;
