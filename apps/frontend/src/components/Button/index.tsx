import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
    padding: 5px;
    background-color: red;
`;

type ButtonProps = {
    children: string;
};

function Button( {children} : ButtonProps ) {
    return (
        <StyledButton>{children}</StyledButton>
    )
}

export default Button;
