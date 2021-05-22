import { useState } from 'rooks';
//import Fields from "./Fields";
import Result from "./Result";
import './style.scss';

export const ImcCalc = () => {

    const [weight, setWeight] = useState('0');
    const [height, setHeight] = useState('0');

    const handleCalculate = () => {
        return weight / (height * height);
    }

    return(

        <div className="container">
            <input type="number" onChange={setWeight} placeholder="Peso" /> quilogramas<br />
            <input type="number" onChange={setHeight} placeholder="Altura" /> centímetros
            <Result handleCalculate={handleCalculate} />
        </div>

    )
    
}

export default ImcCalc;