import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

// Styled components
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 50%;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #4e074e;
  font-weight: bold;
  ::placeholder {
    color: white;
  }
`;

const Submit = styled.button`
  background-color: ${props => props.theme.colors.primary['100']};
  color: white;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 50px;
`;

const Name = styled.div`
  flex-basis: 50%;
  padding: 10px;
  background-color: ${props => props.theme.colors.background['300']};
  border-radius: 25px;
`;

const Initiative = styled.div`
  flex-basis: 15%;
  padding: 10px;
  background-color: ${props => props.theme.colors.background['300']};
  border-radius: 25px;
  display: flex;
  gap: 10px;

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Webkit */
    margin: 0;
  }
`;

const Order = styled.div`
  flex-basis: 10%;
  padding: 10px;
  border-radius: 25px;
  text-align: center;
`;

const Delete = styled.button`
  flex-basis: 13%;
  background-color: #8B0000;
  padding: 10px;
  border-radius: 15px;
  border: none;

  svg {
    font-size: 20px;
    color: white;
  }
`

// Type for a row object
type Row = {
  name: string;
  initiative: string;
};

export const TrackerForm = () => {
  // State variables
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");
  const [rows, setRows] = useState<Row[]>([]);

  // Form submission handler
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim() === "" || initiative.trim() === "") {
      return; // Abort if Name or Initiative is empty
    }

    setRows([...rows, { name, initiative }]);
    setName("");
    setInitiative("");
  };

  // Handle row deletion
  const handleDeleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <Wrapper>
      <form onSubmit={handleFormSubmit}>
        {/* Form inputs */}
        <Inputs>
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
        </Inputs>
      </form>
      {/* Render rows */}
      {rows.map((row, index) => (
        <Row key={index}>
          <Order>{index+1}</Order>
          <Initiative>
            <FontAwesomeIcon icon={faClock} /> {row.initiative}
          </Initiative>
          <Name>{row.name}</Name>
          <Delete onClick={() => handleDeleteRow(index)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Delete>
        </Row>
      ))}
    </Wrapper>
  );
};
