import { useState } from 'react';


function Modal({id, Component}) {
  const [display, setDisplay] = useState('none');
  const styleModal = {display: display};

	const handleModal = () => {
		if (display === 'none') {
			setDisplay('none');
		} else {
			setDisplay('flex');
		}
  }

	return (
		<div id={id} className='modal' style={styleModal}>
			<div className='modal-body flex justify-space-around align-center'>
				<button className='modal-close' onClick={handleModal}>x</button>
				{Component}
			</div>
		</div>
	)
}

export default Modal;