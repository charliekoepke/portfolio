import FieldBlock, { describedBy } from "../atoms/Field.jsx";
import Icon from "../atoms/Icon.jsx";

export default function Select({ id, label, options, help, ...rest }) {
  return (
    <FieldBlock id={id} label={label} help={help}>
      <div className="control">
        <select className="field" id={id} aria-describedby={describedBy(id, help)} {...rest}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <span className="field-chevron">
          <Icon name="chevron" size="sm" />
        </span>
      </div>
    </FieldBlock>
  );
}
