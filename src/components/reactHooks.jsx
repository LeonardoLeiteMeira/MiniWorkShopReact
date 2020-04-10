import React, { useState, useEffect, useReducer } from "react";

export default function Hooks() {
  //Exemplo useState
  const [numero, setNumero] = useState(0);

  function add() {
    setNumero(numero + 1);
    console.log(numero);
  }
  //---------

  //Exemplo UseEffect
  // toda vez que a variavel numero é atualizada a função é executada
  useEffect(() => {
    console.log("Deu bom!!!");
  }, [numero]);
  //----------------

  //exemplo useReducer
  const initialState = {
    count: 0,
    mult: 5,
  };

  function assinaturaDaFuncation(statee, actionnn) {
    switch (actionnn.type) {
      case "increment":
        return { count: statee.count + 1, mult: statee.mult * 2 };
      case "decrement":
        return { count: statee.count - 1, mult: statee.mult / 2 };
      default:
        throw new Error();
    }
  }

  const [stateqa, updateName] = useReducer(assinaturaDaFuncation, initialState);
  //----------------------

  return (
    <>
      <h2>Exemplo com useState</h2>
      <p>o valor atual é: {numero}</p>
      <button onClick={() => add()}>Incrementar valor</button>
      <br />
      <h2>Exemplo com useReducer</h2>
      <p>
        Nossos valores Count: {stateqa.count} {stateqa.mult}
      </p>
      <button onClick={() => updateName({ type: "decrement" })}>-</button>
      <button onClick={() => updateName({ type: "increment" })}>+</button>

      {/* coloquei esses br's aqui em baixo apenas para dar um espaço da parte inferior da tela. 
      Cada <br/> é uma quebra de linha  */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
