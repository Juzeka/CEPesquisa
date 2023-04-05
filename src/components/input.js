function Input({id, placeholder, onChange, onKeyPress}){
  return (
    <input
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
}

export default Input;
