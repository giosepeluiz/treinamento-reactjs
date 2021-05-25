import P from 'prop-types';

export const Fields = ({ setWeight, setHeight }) => {
  return (
    <div>
      <input type="number" onChange={setWeight} placeholder="Peso" /> quilogramas
      <br />
      <input type="number" onChange={setHeight} placeholder="Altura" /> centímetros
    </div>
  );
};

Fields.propTypes = {
  setWeight: P.number,
  setHeight: P.number,
};
