# styled-component 라이브러리를 통해 효율적인 스타일링을 할 수 있다.

## 시작하기

1. styled-component로 부터 styled를 임포트한다.
   import styled from "styled-components";

<br>

2. 컴포넌트 내부에 스타일링할 유니크한 변수명을 정해준다.
   ex) const 컴포넌트명 = styled.태그명

<br>

3. 스타일링 해준다.

```
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
    </Wrapper>
  );
}
```

<br>

## styled로 명시한 컴포넌트는 props 속성을 내려받을 수 있다.

```
const Item = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.bgColor};
`;

function App() {
  return (
    <Wrapper>
      <Item bgColor="salmon" />
      <Item bgColor="mediumPurple" />
    </Wrapper>
  );
}
```

## styled로 명시한 컴포넌트를 확장하여 사용해보자.

```
const Item = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Item)`
  border-radius: 50%;
  margin-top: 1rem;
`;

function App() {
  return (
    <Wrapper>
      <Item bgColor="salmon" />
      <Circle bgColor="mediumPurple" />
    </Wrapper>
  );
}
```

## attr props를 작성해서 일괄적으로 스타일링 속성을 부여할 수 있다.

```
const Input = styled.input({ required: true})`
	background-color: 'mediumPurple';
`;

function App() {
  return (
    <Wrapper as='header'>
	<Input />
	<Input />
	<Input />
	<Input />
	<Input />
	<Input />
	...
    </Wrapper>
  );
}
```

## 하위 태그 스타일링

- 상위 태그 스타일링에서 하위 태그를 명시해주면 된다.
- 요소 자기자신을 가르킬 때는 & 기호를 사용한다.

```
const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: salmon;

  span {
    font-size: 20px;
      &:hover {
	font-size: 40px;
      }
   }
`;

...

<Box>
  <span>Hello!</span>
</Box>
```

<br>

- 위의 경우에는 Box 컴포넌트 내부의 span 태그 요소만 적용된다.
  하위 요소의 태그에 구애받고 싶지 않은 경우.

```
const Span = styled.span`
  font-size: 20px;
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  ${Span}:hover {
    font-size: 40px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
	<!-- as로 다른 태그명을 넘겨주면 된다. -->
        <Span>Hello!</Span>
      </Box>
    </Wrapper>
  );
}
```

## animation

- styled-component 라이브러리로부터 keyframes를 임포트한다.
- import styled, { keyframes } from "styled-components";
- 예시) cosnt 변수명 = keyframe``;

```
const rotation = keyframes`
  0% {
    background-color: red;
  }
  50% {
    background-color: orange;
  }
  100% {
    background-color: green;
  }
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  animation: ${rotation} 3s linear infinite;
`;
```

## theme 설정하기

- ThemeProvider를 임포트한다.
- 최상위 컴포넌트에 ThemeProvider로 감싸준다.
- color, background-color 요소를 테마 별로 선언하고 theme propr로 내려준다.

```
import { ThemeProvider } from "styled-components";

...

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

root.render(
  <React.Fragment>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.Fragment>
);
```
