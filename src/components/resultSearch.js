import Item from "./item";


function ResultSearch({data}){
  return (
    <div className='flex flex-row gap-10'>
      <Item name={data.cep} label='CEP'/>
      <Item name={data.bairro} label='Bairro'/>
      <Item name={data.complemento} label='Complemento'/>
      <Item name={data.localidade} label='Cidade'/>
      <Item name={data.uf} label='UF'/>
      <Item name={data.ddd} label='DDD'/>
    </div>
  )
}

export default ResultSearch;