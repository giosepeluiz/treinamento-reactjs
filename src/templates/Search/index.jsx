import { Component } from 'react';
import Name from './Name.jsx';
import Input from "./Input.jsx";
import './style.scss';

class Search extends Component {
  state = {
    names: ["Carregando nomes..."],
    searchValue: "",
  };

  componentDidMount() {
    this.handleListNames();
  }

  handleListNames = async () => {
    const response = fetch(
      "https://raw.githubusercontent.com/dominictarr/random-name/master/names.json"
    );
    const [names] = await Promise.all([response]);
    const responseJson = await names.json();
    this.setState({ names: responseJson });
  };

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { names, searchValue } = this.state;

    const filteredNames = !!searchValue
      ? names.filter((name) =>
          name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : names;

    return (
      <div className="container">
        <Input searchValue={ searchValue } handleSearch={ this.handleSearch } />
        <Name filteredNames={ filteredNames } />
      </div>
    );
  }
}


export default Search;