import "./CustomText.css";

const CustomTextarea = ({ ariaType, disabled, value, onChange, placeholder }) => {
  return (
    <div className="custom-input-container">
      <input
        ariaType={ariaType}
        type="text"
        disabled={disabled}
        className="custom-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextarea;
