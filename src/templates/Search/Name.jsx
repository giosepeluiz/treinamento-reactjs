import { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div>
        {this.props.filteredNames.map((name) => (
          <p>{name}</p>
        ))}
      </div>
    );
  }
}

export default Name;
