import { Outlet, useLocation } from "react-router";
import SiteFooter from "../components/organisms/SiteFooter.jsx";
import SiteHeader from "../components/organisms/SiteHeader.jsx";
import RouteFocus from "../lib/RouteFocus.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <div className="page" key={pathname}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
      <RouteFocus />
    </>
  );
}
