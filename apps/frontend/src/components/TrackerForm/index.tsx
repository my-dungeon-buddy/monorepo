import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";

const Wrapper = styled.section`
  background-color: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input``;

const Submit = styled.button`
  background-color: ${colors["primary-100"]};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.div`
  flex-basis: 50%;
`;

const Initiative = styled.div`
  flex-basis: 50%;
`;

export const TrackerForm = () => {
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");
  const [rows, setRows] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRows([...rows, { name, initiative }]);
    setName("");
    setInitiative("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleFormSubmit}>
        <Row>
          <Name>
            <Input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Name>
          <Initiative>
            <Input
              type="number"
              placeholder="Initiative"
              value={initiative}
              onChange={(event) => setInitiative(event.target.value)}
            />
          </Initiative>
        </Row>
        {rows.map((row, index) => (
          <Row key={index}>
            <Name>{row.name}</Name>
            <Initiative>{row.initiative}</Initiative>
          </Row>
        ))}
        <Submit type="submit">Ajouter</Submit>
      </form>
    </Wrapper>
  );
};
