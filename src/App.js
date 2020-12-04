import React from 'react';

class Bit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val,
    }
  }

  render() {
    return (
      <button onClick={this.props.onClick}>{this.state.val}</button>
      )
  }
}

function getrand(a, b) {
  return Math.floor(Math.random() * (a + b - 1)) + a;
}


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bits: new Array(8).fill(0),
      decimal: getrand(1, 10),
    }
  }

  renderBits(i) {
    return (<Bit 
      val={this.state.bits[i]}
      onClick={() => this.handleClick(i)}
      />)
  }

  handleClick(i) {
    this.setState({
      val: (this.state.bits[i] === '0') ? '1' : '0',
    })
  }

  render() {
    return (
      <div>
        <div>Binary game!</div>
        <div>{ this.state.decimal }</div>
        {new Array(8).fill(0).map ((n) => {return this.renderBits(n)})}
      </div>
      )
  }
}

export default Game;
