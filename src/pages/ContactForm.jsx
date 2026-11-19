import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import Button from "../components/atoms/Button.jsx";
import Input from "../components/atoms/Input.jsx";
import Textarea from "../components/atoms/Textarea.jsx";
import Alert from "../components/molecules/Alert.jsx";
import Form, { FormActions } from "../components/molecules/Form.jsx";

const ENDPOINT = "https://api.web3forms.com/submit";

const RESULTS = {
  success: {
    title: "Sent Successfully",
    body: "Thank you for reaching out! I will get back to you as soon as I am able.",
  },
  error: {
    title: "An Error Occurred",
    body: "Please try again in a moment",
  },
};

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [searchParams] = useSearchParams();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const sendRef = useRef(null);
  const alertRef = useRef(null);

  useEffect(() => {
    if (searchParams.get("sent") !== "1") return;
    setResult("success");
    const next = new URLSearchParams(searchParams);
    next.delete("sent");
    navigate({ search: next.toString(), hash }, { replace: true, preventScrollReset: true });
  }, [searchParams, hash, navigate]);

  useEffect(() => {
    if (result) alertRef.current?.scrollIntoView({ block: "nearest" });
  }, [result]);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await response.json();
      if (!data || data.success !== true) throw new Error("send failed");
      form.reset();
      setResult("success");
    } catch {
      setResult("error");
    } finally {
      setSending(false);
    }
  }

  const message = RESULTS[result || "success"];

  return (
    <>
      <Form id="contact-form" action={ENDPOINT} method="post" onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value="83ddcf6f-9b85-473d-8971-9aca50e0a9d8" />
        <input type="hidden" name="subject" value="Portfolio inquiry" />
        <input type="hidden" name="redirect" value="https://charliekoepke.github.io/portfolio/about/?sent=1" />
        <input className="form-honey" type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" />
        <Input id="contact-name" label="Name" name="name" autoComplete="name" />
        <Input
          id="contact-email"
          label="Email address (required)"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@domain.com"
          help="Used for project inquiries."
          required
        />
        <Textarea id="contact-message" label="Message" name="message" />
        <FormActions>
          <Button ref={sendRef} type="submit" disabled={sending}>
            Send message
          </Button>
        </FormActions>
      </Form>
      <Alert
        ref={alertRef}
        id="form-alert"
        tone={result === "error" ? "error" : "success"}
        title={message.title}
        hidden={!result}
        onDismiss={() => {
          setResult(null);
          sendRef.current?.focus();
        }}
      >
        {message.body}
      </Alert>
    </>
  );
}
