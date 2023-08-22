

const Input = (props) => {

const {name, type, value, onChange, placeholder} = props;

  return (
    <input
    name = {name}
    type = {type}
    value = {value}
    onChange = {onChange}
    placeholder = {placeholder}
    />
  );
};

export default Input;