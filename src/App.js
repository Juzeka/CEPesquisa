import './App.css';
import api from './services/api';
import { useState } from 'react';


function App() {
  const [display, setDisplay] = useState('none');
  const [cep, setCep] = useState();
  const [data, setData] = useState({
    cep: null,
    logradouro: null,
    complemento: null,
    bairro: null,
    localidade: null,
    uf: null,
    ibge: null,
    gia: null,
    ddd: null,
    siafi: null
  });
  const styleModal = {display: display};

  const handleCep = (event) => {
    let value = event.target.value;

    if (value && value.length === 9){
      setCep(event.target.value);
    }
  }
  const handleBuscarCep = (e) => {
    if (e.key === 'Enter') {
      getCEP();
    }
  }
  const getCEP = ()=> {
    if (cep) {
      api.get(`${cep}/json`)
      .then((response) => {
        let data = response.data;

        if (!data.erro) {
          setData(response.data);
          openModal();
        } else {
          alert("CEP não encontrado!")
        }
      })
      .catch((error) =>{
        console.log(error)
        alert("CEP inválido!");
      })
    } else {
      alert("Digite um CEP no campo de busca!");
    }

  }
  const closeModal = () => {
    setDisplay('none');
  }
  const openModal = () => {
    setDisplay('flex');
  }

  return (
    <>
      <div id='sucess' className='modal' style={styleModal}>
        <div className='modal-body flex justify-space-around align-center'>
          <button className='modal-close' onClick={closeModal}>x</button>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-column'>
              <label>CEP</label>
              <span className='info'>{data.cep}</span>
            </div>
            <div className='flex flex-column'>
              <label>Bairro</label>
              <span className='info'>{data.bairro}</span> 
            </div>
            <div className='flex flex-column'>
              <label>Complemento</label>
              <span className='info'>{data.complemento ? data.complemento : '-'}</span> 
            </div>
            <div className='flex flex-column'>
              <label>Localidade</label>
              <span className='info'>{data.localidade}</span> 
            </div>
            <div className='flex flex-column'>
              <label>UF</label>
              <span className='info'>{data.uf}</span> 
            </div>
            <div className='flex flex-column'>
              <label>DDD</label>
              <span className='info'>{data.ddd ? data.ddd : '-'}</span> 
            </div>
          </div>
        </div>
      </div>

      <div className="flex align-center flex-column">
        <h3>CEPESQUISA</h3>
        <div>
          <div className='flex gap-10 mb-5'>
            <input 
              id='cep' 
              placeholder='Buscar por CEP'
              onChange={handleCep} 
              onKeyPress={handleBuscarCep}
            />
            <button type='button' className='btn' onClick={getCEP}>Buscar</button>
          </div>
          <span className='exemplo'>Ex: 01001-000</span>
        </div>
      </div>
      <footer>
        <span><a href='https://viacep.com.br/'>FONTE VIACEP BR</a></span>
      </footer>
    </>
  );
}

export default App;
