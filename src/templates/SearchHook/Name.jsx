const Name = ({ filteredNames  }) => {

  return(
    <div>
      {filteredNames.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}


export default Name;
