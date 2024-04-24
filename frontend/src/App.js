import React from 'react';
import FormularioPetshop from './components/FormularioPetshop';

function App() {
  return (
    <div className="App">
      <div className="container-xl text-center min-vh-100">
        <h2 className="text-muted">Encontre o Melhor Petshop</h2>
        <p className="text-secondary my-3 fs-6 fw-semibold">
          Descubra qual é a melhor opção (mais barata) de Petshop para levar os seus amiguinhos de 4 patas.
        </p>
        <FormularioPetshop />
      </div>
    </div>
  );
}

export default App;
