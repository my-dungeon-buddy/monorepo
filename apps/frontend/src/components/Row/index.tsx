import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaRegClock } from "react-icons/fa";

import {Button} from '@my-dungeon-buddy/design-system';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 10px 0;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`;

const Order = styled.div`
  flex-basis: 10%;
  padding: 10px;
  border-radius: 25px;
  text-align: center;
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

type RowProps = {
  index: number;
  name: string;
  initiative: number;
  onDelete: (index: number) => void;
};

export const Row: React.FC<RowProps> = ({ index, name, initiative, onDelete }) => {
  return (
    <StyledRow>
      <Order>{index + 1}</Order>
      <Initiative>
        <FaRegClock />
        {initiative}
      </Initiative>
      <Name>{name}</Name>
      <Button variant="danger" onClick={() => onDelete(index)}><FaTrashAlt /></Button>
    </StyledRow>
  );
};
