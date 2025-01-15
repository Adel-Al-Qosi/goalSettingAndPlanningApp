import './CustomText.css';

const CustomTextarea = ({ disabled, value, onChange, placeholder }) => {
    return (
        <div className='custom-textarea'>
            <input
                type='text'
                disabled={disabled}
                className='custom-textarea'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default CustomTextarea;