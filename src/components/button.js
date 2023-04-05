
function Button({value, onClick}){
  return (
    <button type='button' className='btn' onClick={onClick}>{value}</button>
  )
}

export default Button;
