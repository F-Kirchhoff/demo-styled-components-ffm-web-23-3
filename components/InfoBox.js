import styled from "styled-components";
import css from "styled-jsx/css";

export default function InfoBox({ title, message, variant }) {
  return (
    // use props as you would in normal components
    <InfoBoxContainer variant={variant}>
      <h2>{title}</h2>
      <p>{message}</p>
    </InfoBoxContainer>
  );
}

const InfoBoxContainer = styled.div`
  display: grid;
  gap: 1rem;
  background-color: #ccc;
  border: 0.25rem solid black;
  padding: 2rem 4rem;

  /* long version for defining a variant */
  ${(props) => {
    if (props.variant === "danger") {
      return css`
        background-color: red;
        color: white;
        border-color: white;
      `;
    }
  }}

  /* shorter version */
  ${({ variant }) => {
    return variant === "warning"
      ? css`
          background-color: yellow;
          color: black;
          border-color: black;
        `
      : "";
  }}


  /* even shorter version */
  ${({ variant }) =>
    variant === "success" &&
    css`
      background-color: seagreen;
      color: white;
      border-color: darkgreen;
    `}
`;
