import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Form } from "../Form";
import { Row } from "../Row";

const Wrapper = styled.section`

`;

export const TrackerForm = () => {
  const [rows, setRows] = useState([]);

  const handleFormSubmit = (rowData: any) => {
    setRows([...rows, rowData]);
  };

  const handleDeleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const sortedRows = rows.sort((rowA, rowB) => rowB.initiative - rowA.initiative);

  return (
    <Wrapper>
      <Form onFormSubmit={handleFormSubmit} />
      <TransitionGroup component={null}>
        {sortedRows.map((row, index) => (
          <CSSTransition key={index} timeout={300} classNames="fade">
            <Row
              index={index}
              name={row.name}
              initiative={row.initiative}
              onDelete={handleDeleteRow}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  );
};
