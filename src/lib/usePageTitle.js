import { useEffect } from "react";

export const SITE_TITLE = "Charlie Koepke - Portfolio";

export function usePageTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} · ${SITE_TITLE}` : SITE_TITLE;
  }, [page]);
}
