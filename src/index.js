import React from "react";
import ReactDOM from "react-dom";
// import Msg from "./components/Msg";
import ColorfulMsg from "./components/ColorfulMsg";
import CountButton from "./components/CountButton";

// const colGreen = {
//   color: "green"
// };
const App = () => {
  return (
    <>
      <h2> React ハンズオン！ </h2>
      {/* <p style={{ color: "blue" }}> Reactは難しくないよ～ </p> */}
      {/* <p style={colGreen}> Reactは難しくないよ～ </p> */}
      {/* <Msg /> */}
      {/* propsでコンポーネントに引数を渡す */}
      {/* <ColorfulMsg color="purple" msg="Vueも難しくないよ～" /> */}
      {/* props.childrenでコンポーネントタグに囲まれた要素を渡す */}
      <ColorfulMsg color="blue"> Reactは難しくないよ～ </ColorfulMsg>
      <ColorfulMsg color="green"> Vueも難しくないらしいよ～ </ColorfulMsg>
      <ColorfulMsg color="red"> Prismはよくわかんないよー(;^_^A </ColorfulMsg>
      <CountButton />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
