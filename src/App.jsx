import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { findProject } from "./content/projects/index.js";
import About from "./pages/About.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Projects from "./pages/Projects.jsx";

function CaseStudyRoute() {
  const { slug } = useParams();
  const project = findProject(slug);
  if (!project) return <NotFound />;
  return <CaseStudyPage key={project.slug} project={project} />;
}

function Fallback() {
  const { pathname, search, hash } = useLocation();
  if (pathname.endsWith("/index.html")) {
    const clean = pathname.slice(0, -"index.html".length) || "/";
    return <Navigate replace to={{ pathname: clean, search, hash }} />;
  }
  return <NotFound />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<CaseStudyRoute />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Fallback />} />
      </Route>
    </Routes>
  );
}
