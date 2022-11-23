import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  font-family: courier;
  margin: 0 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  border: 2px solid ${(p) => p.theme.color2};
  border-radius: 10px;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border: 1.6px solid transparent;
  transition: 0.15s border-color;

  &:hover {
    border-color: ${(p) => p.theme.color2};
  }
  &[disabled] {
    background: ${(p) => p.theme.color2};
  }
`;

export default function Form(props) {
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;

  return (
    <StyledForm onMouseEnter={() => props.updateTheme()}>
      <h2>{movie.name}</h2>
      <h4>
        ¿Cuántas entradas quieres?: {movie.available - quantity} Entradas
        Disponibles.
      </h4>
      <StyledButton
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 0}
      >
        -
      </StyledButton>
      {quantity}
      <StyledButton
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity === movie.available}
      >
        +
      </StyledButton>
    </StyledForm>
  );
}