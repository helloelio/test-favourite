function Input(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
