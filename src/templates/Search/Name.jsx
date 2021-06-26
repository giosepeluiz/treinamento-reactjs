import { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div>
        {this.props.filteredNames.map((name, index) => (
          <p key={ index }>{ name }</p>
        ))}
      </div>
    );
  }
}


export default Name;
