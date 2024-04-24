import React, { useState } from 'react';
import axios from 'axios';
import './FormularioPetshop.css';

function FormularioPetshop() {
  const [data, setData] = useState('');
  const [caesPequenos, setCaesPequenos] = useState(0);
  const [caesGrandes, setCaesGrandes] = useState(0);
  const [resultado, setResultado] = useState('');
  const [mensagemDeErro, setMensagemDeErro] = useState('');
  const estiloBasicoInputs = 'py-2 px-3 border rounded-3 my-2 form-control';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (camposValidados()) {
      const resposta = await axios.post('http://localhost:3001/melhor-opcao', { data, caesPequenos, caesGrandes });
      setResultado(`A melhor opção é o Petshop ${resposta.data.melhorPetshop}, que custará R$${resposta.data.custoMinimo}`);
      setMensagemDeErro('');
    } else {
      setMensagemDeErro(
        'Você deve preencher todos os campos. ' +
        'É necessário informar uma quantidade maior que 0 para cães pequenos ou grandes.'
      );
      setResultado('');
    }
  };

  const camposValidados = () => {
    return (data !== '') && ((caesPequenos > 0) || (caesGrandes > 0));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row border rounded py-4 px-1 px-md-4 mx-1 mx-md-0 text-start d-flex justify-content-center">
          <span className="col-12 col-md-3">
            <label htmlFor="data" className="form-label pl-4 mb-0 fw-semibold text-secondary">Data do banho</label>
            <input id="data" type="date" value={data} onChange={e => setData(e.target.value)} required className={estiloBasicoInputs}/>
          </span>
          <span className="col-12 col-md-3">
            <label htmlFor="caesPequenos" className="form-label pl-4 mb-0 fw-semibold text-secondary">Cães pequenos</label>
            <input id="caesPequenos" type="number" value={caesPequenos} onChange={e => setCaesPequenos(e.target.value)} required className={estiloBasicoInputs}/>
          </span>
          <span className="col-12 col-md-3">
            <label htmlFor="caesGrandes" className="form-label pl-4 mb-0 fw-semibold text-secondary">Cães grandes</label>
            <input id="caesGrandes" type="number" value={caesGrandes} onChange={e => setCaesGrandes(e.target.value)} required className={estiloBasicoInputs}/>
          </span>
          <span className="col-12 col-md-3 d-flex align-items-end">
            <button type="submit" className="btn btn-success w-100 fw-bold p-2 border rounded-3 my-2">Encontrar</button>
          </span>
          <div className="text-danger">
            <span>{mensagemDeErro}</span>
          </div>
        </div>
      </form>
      <div className="text-center fw-bold mt-4">
        <h4 className="text-muted">{resultado}</h4>
      </div>
    </>
  );
}

export default FormularioPetshop;