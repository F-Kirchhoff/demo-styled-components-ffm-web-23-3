import styled from "styled-components";
import InfoBox from "../components/InfoBox";

export default function HomePage() {
  function test(...args) {
    console.log(args);
  }

  test`what is happening?!`;

  return (
    <Container>
      <InfoBox title="test" message="Success" variant="success" />
      <InfoBox title="Danger!" message="Error..." variant="danger" />
      <MyButton textColor="#333">Click me!</MyButton>
    </Container>
  );
}

// Don't forget to install the styled components extension for vscode!

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Tagged Template Literals
const MyButton = styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: var(--primary-color);

  /* long version for using props in styled components */
  color: ${(props) => {
    if (!props.textColor) {
      return "white";
    }
    return props.textColor;
  }};

  /* short version */
  color: ${({ textColor = "white" }) => textColor};

  /* & === selector for current element that we are in */
  &:hover {
    background-color: magenta;
  }

  @media screen and (max-width: 400px) {
    & {
      font-size: 12px;
    }
  }
`;
