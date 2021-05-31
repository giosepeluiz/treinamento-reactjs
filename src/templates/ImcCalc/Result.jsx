import P from 'prop-types';

export const Result = ({ handleCalculate, total, info }) => {
  return (
    <div>
      <input type="button" value="Calcular" onClick={handleCalculate} />
      <p>
        <br />
        Seu IMC é: <b>{total}</b>
        <br />
        {info}
      </p>
    </div>
  );
};

Result.propTypes = {
  handleCalculate: P.func,
  total: P.number,
  info: P.string,
};
