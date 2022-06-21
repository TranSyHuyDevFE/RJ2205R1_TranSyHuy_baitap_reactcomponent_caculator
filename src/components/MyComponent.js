import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    numA: "",
    numB: "",
  };

  handleChangeNumA = (e) => {
    this.setState({
      numA: e.target.value,
    });
  };

  handleChangeNumB = (e) => {
    this.setState({
      numB: e.target.value,
    });
  };

  caculator = (todoCaCulator) => {
    const result = todoCaCulator;
    const resultShow = document.querySelector("#result");
    resultShow.innerHTML = result;
  };
  handleAdd = (e) => {
    e.preventDefault();
    this.caculator(parseInt(this.state.numA) + parseInt(this.state.numB));
  };

  handleSub = (e) => {
    e.preventDefault();
    this.caculator(parseInt(this.state.numA) - parseInt(this.state.numB));
  };

  handleMulti = (e) => {
    e.preventDefault();
    this.caculator(parseInt(this.state.numA) * parseInt(this.state.numB));
  };

  handleDive = (e) => {
    e.preventDefault();
    this.caculator(parseInt(this.state.numA) / parseInt(this.state.numB));
  };

  handleModu = (e) => {
    e.preventDefault();
    this.caculator(parseInt(this.state.numA) % parseInt(this.state.numB));
  };
  render() {
    console.log(">>call render", this.state);
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h3>Caculator by Sy Huy</h3>
            </div>
            <div className="card-body">
              <div>
                A:{" "}
                <input
                  type="text"
                  value={this.state.numA}
                  onChange={(e) => this.handleChangeNumA(e)}
                />
                <br />
                <br />
                B:{" "}
                <input
                  type="text"
                  value={this.state.numB}
                  onChange={(e) => this.handleChangeNumB(e)}
                />
              </div>
              <div className="submitBTN">
                <button
                  className="btn-primary btn"
                  onClick={(e) => this.handleAdd(e)}
                >
                  +
                </button>
                <button
                  className="btn-danger btn"
                  onClick={(e) => this.handleSub(e)}
                >
                  -
                </button>
                <button
                  className="btn-success btn"
                  onClick={(e) => this.handleMulti(e)}
                >
                  X
                </button>
                <button
                  className="btn-warning btn"
                  onClick={(e) => this.handleDive(e)}
                >
                  :
                </button>
                <button
                  className="btn-danger btn"
                  onClick={(e) => this.handleModu(e)}
                >
                  %
                </button>
              </div>
            </div>

            <div className="card-footer">
              Result: <b id="result"></b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
