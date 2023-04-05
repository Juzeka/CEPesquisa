import './App.css';
import api from './services/api';
import { useState } from 'react';
import Footer from './components/footer';
import ModalSucess from './components/modalSucess';
import Button from './components/button';
import Input from './components/input';


function App() {
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

  return (
    <>
      <ModalSucess data={data}/>
      <div className="flex align-center flex-column">
        <h3>CEPESQUISA</h3>
        <div>
          <div className='flex gap-10 mb-5'>
            <Input
              id='cep'
              placeholder='Buscar por CEP'
              onChange={handleCep}
              onKeyPress={handleBuscarCep}
            />
            <Button value='Buscar' onClick={getCEP}/>
          </div>
          <span className='exemplo'>Ex: 01001-000</span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
