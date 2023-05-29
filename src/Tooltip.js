import React, { useState } from "react";

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {children}
      {showTooltip && (
        <>
          <div className="tooltip-hover">{text}</div>
          <div className="tooltip-hint" />
        </>
      )}
    </div>
  );
};

export default Tooltip;
