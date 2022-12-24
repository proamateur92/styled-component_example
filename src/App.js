import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Box).attrs({ required: true })`
  border-radius: 50%;
  margin-top: 1rem;
`;

function App() {
  return (
    <Wrapper as="header">
      <Box bgColor="salmon" />
      <Circle bgColor="mediumPurple" as="input" />
    </Wrapper>
  );
}

export default App;
