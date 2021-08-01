import React, { useState } from "react";
import BaseButton from "../../ui/BaseButton";
import { CSSTransition } from "react-transition-group";

function NavItem({ mode, icon, text, link, children }) {
  const [open, setOpen] = useState(false);

  if (mode === "link") {
    return (
      <li className="nav-item">
        <BaseButton mode={mode} link={link}>
          {icon} {text}
        </BaseButton>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <BaseButton mode="nav" click={() => setOpen(!open)}>
          {icon} {text}
        </BaseButton>
        {open && (
          <div className="drop-out" onClick={() => setOpen(!open)}></div>
        )}
        <CSSTransition
          in={open}
          unmountOnExit
          timeout={300}
          classNames="dropdown"
          // onEnter={calHeight}
        >
          <div>{children}</div>
        </CSSTransition>
      </li>
    );
  }
}

export default NavItem;
