const Input = ({searchValue, handleSearch }) => {
	return (
		<div>
			<input
				value={ searchValue }
				onChange={ handleSearch }
				type="text"
				placeholder="Digite um nome para busca"
			/>
			<br />
		</div>
	);
}

export default Input;
