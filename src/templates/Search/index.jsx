import { Component } from 'react';
import './style.scss';

class Search extends Component {
  constructor(){
    super();
    console.log('Constructor...')
  }
  
  render(){
    return(
      <div className="container">
        Olá Mundo!!!
      </div>
    )
  }
}


export default Search;