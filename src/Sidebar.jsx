import { forwardRef } from "react";

const Sidebar = forwardRef(function Sidebar(props, ref) {
  return (
    <div ref={ref} className="sidebar">
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
  );
});

export default Sidebar;
