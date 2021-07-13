import { useState, useEffect } from 'react';
import Name from './Name.jsx';
import Input from "./Input.jsx";
import './style.min.css';

const SearchHook = () => {

  const [names, setNames] = useState(["Carregando nomes..."]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    handleListNames();
  }, [])

  const handleListNames = async () => {
    const response = fetch(
      "https://raw.githubusercontent.com/dominictarr/random-name/master/names.json"
    );
    const [names] = await Promise.all([response]);
    const responseJson = await names.json();
    setNames(responseJson);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredNames = !!searchValue
    ? names.filter((name) =>
        name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : names;

  return (

    <div className="container">
      <Input searchValue={ searchValue } handleSearch={ handleSearch } />
      <Name filteredNames={ filteredNames } />
    </div>
  );

}

export default SearchHook;