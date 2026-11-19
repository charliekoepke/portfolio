import { useEffect, useRef, useState } from "react";
import CaseStudy from "../components/patterns/CaseStudy.jsx";
import StudyGate from "../components/patterns/StudyGate.jsx";
import { STUDY_PASSWORD, isUnlocked, unlock } from "../content/studyAccess.js";
import { usePageTitle } from "../lib/usePageTitle.js";

export default function CaseStudyPage({ project }) {
  usePageTitle(project.title);
  const [open, setOpen] = useState(() => !project.locked || isUnlocked(project.slug));
  const titleRef = useRef(null);
  const focusTitle = useRef(false);

  useEffect(() => {
    if (open && focusTitle.current) {
      focusTitle.current = false;
      titleRef.current?.focus();
    }
  }, [open]);

  if (!open) {
    return (
      <div className="canvas">
        <StudyGate
          check={(value) => value === STUDY_PASSWORD}
          onUnlock={() => {
            unlock(project.slug);
            focusTitle.current = true;
            setOpen(true);
          }}
        />
      </div>
    );
  }

  return <CaseStudy project={project} titleRef={titleRef} />;
}
