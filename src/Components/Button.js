const Button = ({ text, onClick, color }) => {
  return (
    <button type="text" className="button" onClick={onClick} color={color}>
      {text}
    </button>
  );
};
export default Button;
