/* eslint-disable */
import { useState } from 'react';
import { Fields } from './Fields';
import { Result } from './Result';
import './style.min.css';

export default function imcCalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [total, setTotal] = useState(0);
  const [info, setInfo] = useState();

  const handleCalculate = () => {
    let heightSquare = height.target.value * height.target.value;
    let total = weight.target.value / heightSquare;

    if (total < 18.5) {
      setInfo('Você está com peso abaixo do ideal.');
    } else if (total < 24.9) {
      setInfo('Você está com peso ideal.');
    } else if (total < 29.9) {
      setInfo('Você está com sobrepeso.');
    } else if (total < 34.9) {
      setInfo('Você está com obesidade.');
    } else {
      setInfo('Você está com obesidade mórbida.');
    }, []);

    setTotal(Math.round(total));
  };

  return (
    <div className="container">
      <Fields setHeight={setHeight} setWeight={setWeight} />
      <Result handleCalculate={handleCalculate} total={total} info={info} />
    </div>
  );
}
