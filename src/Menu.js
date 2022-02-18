import SideMenu from "./SideMenu";
import { useState } from "react";

import './menu.scss'

const Menu = () => {
  const [showMenu, SetShowMenu] = useState({
    open: false,
  });

  const hamburger = {
    backgroundColor: showMenu.open ? 'tomato' : '',
    width: showMenu.open ? '50px' : '',
    height: showMenu.open ? '50px' : '',
    borderRadius: showMenu.open ? '50%' : '',
  }

  const top = {
    backgroundColor: showMenu.open ? 'white' : 'black',
    transform: showMenu.open ? 'rotate(450DEG)' : '',
    width: showMenu.open ? '30px' : '',
    height: showMenu.open ? '3px' : '',
    marginLeft: showMenu.open ? '6px' : '',
  }

  const middle = {
    backgroundColor: showMenu.open ? 'white' : 'black',
    transform: showMenu.open ? 'rotate(412DEG)' : '',
    marginTop: showMenu.open ? '5px' : '',
    width: showMenu.open ? '36px' : '',
    height: showMenu.open ? '3px' : '',
  }

  const bottom = {
    backgroundColor: showMenu.open ? 'white' : 'black',
    transform: showMenu.open ? 'rotate(450DEG)' : '',
    marginTop: showMenu.open ? '2px' : '',
    marginRight: showMenu.open ? '11px' : '',
    width: showMenu.open ? '30px' : '',
    height: showMenu.open ? '3px' : '',
  }

  const side = {
    marginLeft: showMenu.open ? '-35%' : '',
    backgroundColor: showMenu.open ? 'pink' : '',
  }


  function handleClick() {
    SetShowMenu(prevState => ({
      open: !prevState.open
    }));

  }

  return (
    <>
      <div className="hamburger" onClick={handleClick} style={hamburger}>
        <span id='top' style={top} />
        <span id='middle' style={middle} />
        <span id='bottom' style={bottom} />
      </div>
      <SideMenu style={side} />
    </>
  )
}

export default Menu;