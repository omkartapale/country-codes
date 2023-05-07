import React, { useEffect, useState } from "react";
import "../../scss/common/ScrollToTopButton.scss";
import { ReactComponent as ScrollUpArrow } from "../../assets/scroll-up.svg";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      },
      []
    );
  });

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="ScrollToTopButton">
      {showButton && (
        <button
          className="btn rounded-circle"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ScrollUpArrow width="32" height="32" />
        </button>
      )}
    </div>
  );
};
export default ScrollToTopButton;
