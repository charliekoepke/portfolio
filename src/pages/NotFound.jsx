import Button from "../components/atoms/Button.jsx";
import EmptyState from "../components/molecules/EmptyState.jsx";
import { usePageTitle } from "../lib/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page Not Found");
  return (
    <div className="canvas">
      <EmptyState
        title="Page Not Found"
        headingLevel={1}
        action={<Button to="/projects">View projects</Button>}
      >
        This address may have changed. The projects page lists every case study.
      </EmptyState>
    </div>
  );
}
