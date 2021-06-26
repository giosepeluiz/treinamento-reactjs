import { Component } from "react";

class Input extends Component {
	render() {
		return (
			<div>
				<input
					value={ this.props.searchValue }
					onChange={ this.props.handleSearch }
					type="text"
					placeholder="Digite um nome para busca"
				/>
				<br />
			</div>
		);
	}
}

export default Input;
