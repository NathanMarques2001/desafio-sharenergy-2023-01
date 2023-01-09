import './styles.css'

export const Input = (
  type: string,
  className: string,
  placeholder: string,
  require: false,
  minLength?: number,
) => (
  <input
    type={type}
    className={className}
    minLength={minLength}
    placeholder={placeholder}
    required={require}
  />
);