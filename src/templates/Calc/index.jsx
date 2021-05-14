import { Component } from "react";
import Form from "./Form";
import './style.scss';

class Calc extends Component {

    state = {
        year: 0,
        born: 0
    }

    handleStateYear = (e) => {
        this.setState({ year: e.target.value });
        console.log(`debug: ${e.target.value}`)
    }

    handleStateBorn = (e) => {
        this.setState({ born: e.target.value });
        console.log(`debug: ${e.target.value}`)
    }

    render(){

        const { year } = this.state;
        const { born } = this.state;

        function Calculate(props){
            let { year, born } = props;
            if(year-born <= 0){
                return <p>{ `Digite os valores para calcular a idade.` }</p>;
            } else {
                return <p>{ `A idade é ${year-born} anos!` }</p>;
            }

        }

        return(

            <div className="container">
                <Form setYear={ this.handleStateYear } setBorn = { this.handleStateBorn } /><br />
                <Calculate year={ year } born={ born } />
            </div>

        )
    }
    
}

export default Calc;