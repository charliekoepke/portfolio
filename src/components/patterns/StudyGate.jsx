import { useRef, useState } from "react";
import Button from "../atoms/Button.jsx";
import Input from "../atoms/Input.jsx";

export default function StudyGate({ check, onUnlock, fieldId = "study-password" }) {
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  function onSubmit(event) {
    event.preventDefault();
    if (check(inputRef.current.value)) {
      setError(false);
      onUnlock();
      return;
    }
    setError(true);
    inputRef.current.focus();
  }

  return (
    <form className="study-gate" onSubmit={onSubmit}>
      <h1 tabIndex={-1}>Enter Password</h1>
      <Input
        ref={inputRef}
        id={fieldId}
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
        error={error ? "That password is incorrect. Try again." : null}
      />
      <div className="form-actions">
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}
