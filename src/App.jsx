import { useState, useEffect } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateClass, setAnimateClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    if (!showSidebar) {
      // Mount sidebar, then trigger open animation
      setShowSidebar(true);
      setAnimateClass("sidebar-open");
    } else {
      // Trigger close animation
      setAnimateClass("sidebar-close");
    }
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    if (animateClass === "sidebar-close") {
      const timer = setTimeout(() => {
        setShowSidebar(false); // unmount
      }, 180); // match CSS duration

      return () => clearTimeout(timer);
    }
  }, [animateClass]);
  return (
    <>
      <div className="main-container">
        <div className="the-button-div">
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {!showSidebar && <div className="placeholder"></div>}

        {showSidebar && (
          <div className={animateClass}>
            <div className="sliding-div-container">
              <div className="sliding-div">
                <h2>HOME</h2>
              </div>
              <div className="sliding-div-two">
                <h2>PRODUCTS</h2>
              </div>
              <div className="sliding-div-three">
                <h2>SERVICES</h2>
              </div>
              <div className="sliding-div-four">
                <h2>CONTACT</h2>
              </div>
              <div className="sliding-div-five">
                <h2>ABOUT US</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
