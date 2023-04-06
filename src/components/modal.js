import { useState } from 'react';


function Modal({id,  Component, setIsVisible}) {
  const [isOpen, setIsOpen] = useState(false);

	const handleModal = () => {
		setIsVisible(false);
  }

	return (
    <div id={id} className='modal'>
      <div className='modal-body flex justify-space-around align-center'>
        <button className='modal-close' onClick={handleModal}>&times;</button>
        {Component}
      </div>
    </div>
	)
}

export default Modal;
