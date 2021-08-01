import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./DropdownItem";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "main",
      menuHeight: null,
    };
    this.calHeight = this.calHeight.bind(this);
    this.setActiveMenu = this.setActiveMenu.bind(this);
    this.itemsList = this.itemsList.bind(this);
  }

  calHeight(el) {
    const height = el.offsetHeight;
    this.setState({
      menuHeight: height,
    });
  }

  setActiveMenu(value) {
    this.setState({
      activeMenu: value,
    });
  }

  itemsList(items) {
    return items.map((item, i) => {
      let clickEvent = null;
      if (item.type === "nav") {
        clickEvent = this.setActiveMenu;
      } else if (item.type === "theme") {
        clickEvent = this.props.selectTheme;
      }
      return (
        <DropdownItem
          key={item.body + i}
          leftIcon={item.left}
          rightIcon={item.right}
          value={item.value}
          type={item.type}
          clickEvent={clickEvent}
        >
          {item.body}
        </DropdownItem>
      );
    });
  }

  render() {
    const { itemsPrimary, itemsSecondary } = this.props;
    const { activeMenu, menuHeight } = this.state;
    const itemListPrimary = this.itemsList(itemsPrimary);
    const itemListSecondary =
      activeMenu !== "main" && this.itemsList(itemsSecondary[activeMenu]);

    return (
      <div className="dropdown-menu" style={{ height: menuHeight }}>
        <CSSTransition
          in={activeMenu === "main"}
          unmountOnExit
          timeout={300}
          classNames="menu-primary"
          onEnter={this.calHeight}
        >
          <ul className="menu">{itemListPrimary}</ul>
        </CSSTransition>

        <CSSTransition
          in={activeMenu !== "main" && activeMenu !== null}
          unmountOnExit
          timeout={300}
          classNames="menu-secondary"
          onEnter={this.calHeight}
        >
          <ul className="menu">
            <DropdownItem
              leftIcon={<i className="fas fa-chevron-left"></i>}
              value="main"
              clickEvent={this.setActiveMenu}
            />
            {itemListSecondary}
          </ul>
        </CSSTransition>
      </div>
    );
  }
}

export default DropdownMenu;
