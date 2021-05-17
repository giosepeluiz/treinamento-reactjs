import { Component } from 'react';
import './style.scss';

class Search extends Component {
  constructor() {
    super();
    console.log("Constructor...");
  }

  state = {
    names: ['Carregando nomes...'],
    searchValue: ''
  };

  componentDidMount() {
    this.handleListNames();
  }

  handleListNames = async () => {
    const response = fetch("https://raw.githubusercontent.com/dominictarr/random-name/master/names.json");
    const [names] = await Promise.all([response]);
    const responseJson = await names.json();
    this.setState({ names: responseJson });
  };

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { names, searchValue } = this.state;
    
    const filteredNames = !!searchValue ? names.filter(name => (
      name.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    )) : names;

    return  (
      
      <div className="container">
        <input className="inputtext" value={ searchValue } onChange={this.handleSearch} type="text" placeholder="Digite um nome para busca" /><br /><br />
        { filteredNames.map(name => (
          <p>{name}</p>
        )) }
      </div>

    )
  }
}


export default Search;