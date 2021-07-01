import React from "react";

function ConfigOption({ selectTheme }) {
  return (
    <React.Fragment>

        <i className="fas fa-ellipsis-v"></i> Theme
        <select
        name="Theme"
        placeholder="Theme"
        onClick={selectTheme}
      >
        <option value="original">Original</option>
        <option value="green">Green</option>
        <option value="pink">Pink</option>
      </select>
      
    </React.Fragment>
  );
}

export default ConfigOption;
