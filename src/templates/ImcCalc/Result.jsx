import P from 'prop-types';

export const Result = ({ handleCalculate }) => {
  return <div>{handleCalculate}</div>;
};

Result.propTypes = {
  handleCalculate: P.func,
};
