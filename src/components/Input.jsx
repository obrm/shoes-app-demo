const Input = ({name, value, type, handleChange, error}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      <div className="error-message">{error}</div>
    </div>
  );
};
export default Input;