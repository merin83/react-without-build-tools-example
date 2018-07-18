'use strict';

class HelloReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Hello React!';
    }

    return (
      <button onClick={() => this.setState({ clicked: true }) }>
        Click Me
      </button>
    );
  }
}

let domContainer = document.querySelector('#hello_react_container');
ReactDOM.render(<HelloReact />, domContainer);
