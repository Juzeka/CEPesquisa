import Modal from "./modal";
import ResultSearch from "./resultSearch";


function ModalSucess({data}) {
  return (
    <Modal
      id='sucess' 
      Component={<ResultSearch data={data}/>}
    />
  )
}

export default ModalSucess;