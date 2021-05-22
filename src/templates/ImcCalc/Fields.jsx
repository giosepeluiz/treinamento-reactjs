const Fields = ({setWeight, setHeight}) => {
    return(
        <div>
            <input type="number" onChange={setWeight} placeholder="Peso" /> quilogramas<br />
            <input type="number" onChange={setHeight} placeholder="Altura" /> centímetros
        </div>
    )
}

export default Fields;