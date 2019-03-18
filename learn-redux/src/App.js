import React from "react";
import { Button } from "reactstrap";
class App extends React.Component {
  state = {
    counter: 0,
    color: "black"
  };
  handleOnclickIncre() {
    this.setState(prev => ({
      counter: ++prev.counter
    }));
  }
  handleOnclickDecre() {
    this.setState(prev => ({
      counter: --prev.counter
    }));
  }
  handleOnclickChaCo() {
    this.setState(prev => ({
      color: prev.color === "black" ? "white" : "black"
    }));
  }
  render() {
    return (
      <div className="text-center relative">
        <div
          className="counter bg-danger"
          style={{ display: "inline-block", width: "100%" }}
        >
          <h1>Counter</h1>
          <h3 style={{ color: this.state.color }}>{this.state.counter}</h3>
        </div>

        <div className="controller bg-dark p-3">
          <div className="controller--changecolor ">
            <Button
              outline
              color="success"
              onClick={() => this.handleOnclickChaCo()}
            >
              Changecolor
            </Button>
          </div>
          <Button
            outline
            color="primary"
            onClick={() => this.handleOnclickIncre()}
          >
            Incre
          </Button>{" "}
          <Button
            outline
            color="secondary"
            onClick={() => this.handleOnclickDecre()}
          >
            Decre
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default App;
