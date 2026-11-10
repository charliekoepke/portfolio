export default function RadioGroup({ legend, name, options, defaultValue, disabled }) {
  return (
    <fieldset className="fieldset">
      <legend>{legend}</legend>
      {options.map((option) => (
        <label className="radio" key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={option.value === defaultValue}
            disabled={disabled}
          />{" "}
          <span className="radio-mark"></span> {option.label}
        </label>
      ))}
    </fieldset>
  );
}
