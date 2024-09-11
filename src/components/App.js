import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Result from "./Display";
import Keypad from "./Keypad";


const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clear();
    } else if (value === "del") {
      setInput(input.slice(0, -1)); 
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Invalid input");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <Container  className="mt-5 container-parent">
      <Row>
        <Col xs={12}>
          <Result input={input} result={result} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Keypad handleClick={handleClick} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
