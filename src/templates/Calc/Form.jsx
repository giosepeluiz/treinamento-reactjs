import { Component } from 'react';

class Form extends Component {
    render(){
        return(
            <div>
                <input type="number" placeholder="Ano atual" onChange={ this.props.setYear } /><br />
                <input type="number" placeholder="Ano nascimento" onChange={  this.props.setBorn } /><br />
            </div>
        )
    }

}

export default Form;