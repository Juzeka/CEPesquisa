import Modal from "./modal";
import ResultSearch from "./resultSearch";


function ModalSucess({data, setIsVisible}) {
  return (
    <Modal
      id='sucess'
      Component={<ResultSearch data={data}/>}
      setIsVisible={setIsVisible}
    />
  )
}

export default ModalSucess;
