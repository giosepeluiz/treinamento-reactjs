import { useState } from 'react';
import { Fields } from './Fields';
import { Result } from './Result';
import './style.scss';

export const ImcCalc = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  //const [total, setTotal] = useState(0);

  console.log(weight.nativeEvent.data);

  const handleCalculate = () => {
    return weight / (height * height);
  };

  return (
    <div className="container">
      <Fields setHeight={setHeight} setWeight={setWeight} />
      <Result handleCalculate={handleCalculate} />
    </div>
  );
};

export default ImcCalc;
