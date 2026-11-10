import { useRef, useState } from "react";
import FieldBlock from "../atoms/Field.jsx";
import IconButton from "../atoms/IconButton.jsx";
import Icon from "../atoms/Icon.jsx";

export default function Search({ id, label, placeholder, defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef(null);
  return (
    <FieldBlock id={id} label={label}>
      <div className="control has-start">
        <span className="field-icon">
          <Icon name="search" />
        </span>
        <input
          ref={inputRef}
          className="field"
          id={id}
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {value && (
          <IconButton
            className="field-end"
            icon="close"
            label="Clear search"
            onClick={() => {
              setValue("");
              inputRef.current?.focus();
            }}
          />
        )}
      </div>
    </FieldBlock>
  );
}
