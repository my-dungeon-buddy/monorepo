import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import {Button} from '@my-dungeon-buddy/design-system';
import { TrackerRow } from "../../models/tracker";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-weight: bold;
  color: white;
  ::placeholder {
    color: white;
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Initiative = styled.div`
  flex-basis: 14%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background["300"]};
  border-radius: 25px;
  display: flex;
  gap: 10px;
  align-items: center;

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Name = styled.div`
  flex-basis: 50%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background["300"]};
  border-radius: 25px;
`;

type FormProps = {
  onFormSubmit: (formData: TrackerRow) => void;
};

export const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const [name, setName] = useState<string>("");
  const [initiative, setInitiative] = useState<number|null>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim() === "" || initiative === null) {
      return;
    }

    onFormSubmit({ name, initiative });
    setName("");
    setInitiative(null);
  };

  return (
      <FormContainer onSubmit={handleFormSubmit}>
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
        </Inputs>
        <Button size="small" type="submit"><FaPlus />Ajouter</Button>
      </FormContainer>
  );
};
