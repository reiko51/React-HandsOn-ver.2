import React from "react";
class CountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    // alert();
    //setStateするとレンダリングされる
    // this.setState({ count: this.state.count + 1 });
    // stateは必ずしも時系列で処理される訳ではないので現在のstateを明確に渡す thisはだめってこと？
    // this.setState((state, props) => {
    //   return { count: state.count + 1 };
    // });
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default CountButton;
