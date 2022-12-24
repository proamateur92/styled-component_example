// style
import styled from "styled-components";

const Title = styled.span`
  font-size: 5rem;
  font-weight: bold;

  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>HELL'O</Title>
    </Wrapper>
  );
}

export default App;
