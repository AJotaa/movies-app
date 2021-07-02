import React from "react";
import BaseButton from "./BaseButton.jsx";
import { useHistory } from "react-router-dom";

function BackButton() {
  let history = useHistory();
  return (
    <div id="back-button">
      <BaseButton mode="left" click={() => history.goBack()} />
    </div>
  );
}

export default BackButton;
