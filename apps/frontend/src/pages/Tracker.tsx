import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Form } from "../components/Form";
import { Row } from "../components/Row";
import { TrackerRow } from "../models/tracker";

export const Tracker = () => {
  const [rows, setRows] = useState<TrackerRow[]>([]);

  const handleFormSubmit = (rowData: TrackerRow) => {
    setRows([...rows, rowData]);
  };

  const handleDeleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const sortedRows = rows.sort((rowA, rowB) => rowB.initiative - rowA.initiative);

  return (
    <section>
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
    </section>
  );
};
