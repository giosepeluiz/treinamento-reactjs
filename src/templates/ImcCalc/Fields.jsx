import P from 'prop-types';

export const Fields = ({ setWeight, setHeight }) => {
  return (
    <div>
      <input type="number" onChange={setWeight} placeholder="0" /> quilogramas
      <br />
      <input type="number" onChange={setHeight} placeholder="0.0" /> metro de altura
    </div>
  );
};

Fields.propTypes = {
  setWeight: P.func,
  setHeight: P.func,
};
