import React from "react";
import { Link as RouterLink } from "react-router-dom";

function BottomHomeButton() {
  return (
    <RouterLink to="/">
      <button className="bottom-home-btn">Return Back</button>
    </RouterLink>
  );
}

export default BottomHomeButton;
