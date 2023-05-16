import React from "react";
import styled from "styled-components";
import { colors } from "../colors"

const Wrapper = styled.section`
 background-color: purple;
 display: flex;
`

const Input = styled.input`
    
`

const Submit = styled.button`
    background-color: ${colors["primary-100"]};
`



export const TrackerForm = () => (
    <Wrapper>
        <Input type="number" placeholder="Initiative" />
        <Input type="text" placeholder="Nom" />
        <Submit type="submit">Ajouter</Submit>
    </Wrapper>
);
