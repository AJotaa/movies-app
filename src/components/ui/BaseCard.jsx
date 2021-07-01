import React from "react";

function BaseCard({ title, text, children }) {
  return (
    <div id="card">
      <div className="default">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="children">{children}</div>
    </div>
  );
}

export default BaseCard;
