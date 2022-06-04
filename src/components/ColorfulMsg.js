import React from "react";

const ColorfulMsg = (props) => {
  // return <p style={{ color: props.color }}> Reactは難しくないよ～ </p>;
  // propsでコンポーネントに引数(color, msg)を渡す
  // return <p style={{ color: props.color }}> {props.msg} </p>;
  // props.childrenでコンポーネントタグに囲まれた要素を渡す
  return <p style={{ color: props.color }}> {props.children} </p>;
};

export default ColorfulMsg;
