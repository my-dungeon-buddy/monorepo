import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input``;

const Submit = styled.button`
  background-color: ${colors["primary-100"]};
  color: white;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.div`
  flex-basis: 50%;
  padding: 20px;
  background-color: purple;
  border-radius: 25px;
`;

const Initiative = styled.div`
  flex-basis: 50%;
`;

const Order = styled.div`
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
        <Initiative>
            <Input
              type="number"
              placeholder="Initiative"
              value={initiative}
              onChange={(event) => setInitiative(event.target.value)}
            />
          </Initiative>
          <Name>
            <Input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Name>
          <Submit type="submit">+ Ajouter</Submit>
        </Row>
        
      </form>
      {rows.map((row, index) => (
          <Row key={index}>
            <Order>{index+1}</Order>
            <Initiative>
              <FontAwesomeIcon icon={faClock} /> {row.initiative}
            </Initiative>
            <Name>{row.name}</Name>
          </Row>
        ))}
    </Wrapper>
  );
};
