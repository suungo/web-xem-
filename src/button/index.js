import { useEffect, useState } from "react";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) { 
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clear up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showGoToTop && (
        <button
          style={{
            color: "#222",
            background: "#fff",
            fontSize: "1rem",
            position: "fixed",
            top: "80%",
            right: '16px',
            border: 'none',
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <FontAwesomeIcon icon={faArrowUp}/>
        </button>
      )}
    </>
  );
}

export default Button;
