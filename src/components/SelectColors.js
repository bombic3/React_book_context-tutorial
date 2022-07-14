import { Component } from "react";
import ColorContext from "../contexts/color";
// 클래스형 컴포넌트에서 Context 쉽게 사용하기

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  // static contextType 정의
  static contextType = ColorContext;
  // 만약 setColor를 호출하고 싶다면 this.context.actions.setColor를 호출하면 됨
  handleSetColor = color => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  };

  render () {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: "pointer"
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
/*
const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              onClick={() => actions.setColor(color)}
              onContextMenu={e => {
                e.preventDefault(); // 마우스 우클락 시 메뉴 뜨는 것 방지
                actions.setSubcolor(color);
              }}
            />
          ))}
          </div>
        )}  
      </ColorConsumer>
      <hr />
    </div>
  );
};
*/
export default SelectColors;