import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar"; // Assuming you have this component

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const sidebarRef = useRef(null);

  function toggleSidebar() {
    if (!isSidebarOpen) {
      // Opening
      setShouldRenderSidebar(true);
    } else {
      // Closing - start animation
      if (sidebarRef.current) {
        sidebarRef.current.classList.remove("sidebar-open");
        sidebarRef.current.classList.add("sidebar-close");
      }
      // Wait for animation to complete before unmounting
      setTimeout(() => {
        setShouldRenderSidebar(false);
      }, 190); // Match CSS animation duration
    }
    setIsSidebarOpen(!isSidebarOpen);
  }

  // Trigger animation after mount when opening
  useEffect(() => {
    if (shouldRenderSidebar && isSidebarOpen && sidebarRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (sidebarRef.current) {
          sidebarRef.current.classList.add("sidebar-open");
        }
      }, 10);
    }
  }, [shouldRenderSidebar, isSidebarOpen]);

  return (
    <>
      <div className="main-container">
        <div className="the-button-div">
          <button
            className={`hamburger ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {!shouldRenderSidebar && <div className="placeholder"></div>}

        {shouldRenderSidebar && <Sidebar ref={sidebarRef} />}
      </div>
    </>
  );
}

export default App;
