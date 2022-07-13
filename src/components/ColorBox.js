import { ColorConsumer } from '../contexts/color';

// ⇒ 객체 비구조화 할당 문법 사용하여 밑 코드와 같이 value 조회하는 것 생략 가능
const ColorBox = () => {
  return (
    <ColorConsumer>
      {({state}) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;

/*
const ColorBox = () => {
  return (
    <ColorConsumer>
      {value => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.state.color
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: value.state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};
*/
