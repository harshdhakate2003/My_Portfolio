import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top on every page change, or to the section when the URL has a hash like #projects.
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return undefined;
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;