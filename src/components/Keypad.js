import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons"; 

const Keypad = ({ handleClick }) => {
  const buttons = [
    ["C", "%", "del", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["", "0", ".", "="],
  ];

  const isOperator = (value) => {
    return ["+", "-", "*", "%", "/", "C", "del"].includes(value);
  };

  return (
    <>
      {buttons.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-2">
          {row.map((buttonValue, colIndex) => (
            <Col key={colIndex} xs={3}>
              <Button
                variant={buttonValue === "=" ? "primary" : "light"} 
                className="rounded-circle w-100"
                style={{
                  backgroundColor:
                  buttonValue === "="
                    ? "#4169e1":"white" ,
                  
                  color:
                    buttonValue === "C"
                      ? "red"
                      : buttonValue === "="
                      ? "white" 
                      : isOperator(buttonValue)
                      ? "#4169e1"
                      : "black", 
                
                  fontSize:isOperator(buttonValue)? "30px":"25px"
                }}
                onClick={() => handleClick(buttonValue)}
              >
                {buttonValue === "del" ? (
                  <FontAwesomeIcon icon={faBackspace} />
                ) : (
                  buttonValue
                )}
              </Button>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default Keypad;
