import React, { Component, useState, useEffect } from 'react';
import './style.css';

//¿ Início do Error Boundaries
class MyErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Atualiza o state para que a próxima renderização mostre a UI alternativa.
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // Você também pode registrar o erro em um serviço de relatórios de erro
      //logErrorToMyService(error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        // Você pode renderizar qualquer UI alternativa
        return <h1 className="blue">Opa! Deu erro no componente.</h1>;
      }

      return this.props.children;
    }
  }
//¿ Fim do Error Boundaries


const CountButton = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if(value > 8){
            throw new Error('Opa, deu erro no componente!');
        }
      }, [value]);

    return(
        <p>
            <button onClick={() => setValue(value + 1)}>Clique para Incrementar ► {value}</button>
        </p>
    )
}

export const ErrorBoundary = () => {

    return (
        <div>
            <b>Clique nos botões abaixo, quando o contador for <span className="red">maior que oito</span>, dará erro.</b>

            <MyErrorBoundary>
                <CountButton />
            </MyErrorBoundary>

            <MyErrorBoundary>
                <CountButton />
            </MyErrorBoundary>

            <MyErrorBoundary>
                <CountButton />
            </MyErrorBoundary>

            <MyErrorBoundary>
                <CountButton />
            </MyErrorBoundary>

            <MyErrorBoundary>
                <CountButton />
            </MyErrorBoundary>

            <MyErrorBoundary>
                <CountButton />
            </MyErrorBoundary>

            <MyErrorBoundary>
                <CountButton />
            </MyErrorBoundary>

        </div>
    );
};

export default ErrorBoundary;