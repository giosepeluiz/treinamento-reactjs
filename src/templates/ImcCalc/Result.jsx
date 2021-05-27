import P from 'prop-types';

export const Result = ({ handleCalculate }) => {
  return (
    <div>
      <input type="button" value="Calcular" onClick={handleCalculate} />
      <p></p>
    </div>
  );
};

Result.propTypes = {
  handleCalculate: P.func,
};
