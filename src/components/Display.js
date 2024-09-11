import React from "react";
import { Card } from "react-bootstrap";

const Result = ({ input, result }) => {
  return (
    <Card className="text-right p-3 mb-4 card-result" style={{ borderRadius: '20px' }}>
      <Card.Body>
        <Card.Text style={{ fontSize: '24px' }}>{input || "0"}</Card.Text>
        <Card.Title style={{ fontSize: '36px' }}>{result || "0"}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Result;
