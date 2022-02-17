import { useState } from "react";
import './menu.scss'

const Menu = () => {
  const [showMenu, SetShowMenu] = useState({
    open: false,
  });

  const top = {
    backgroundColor: showMenu.open ? 'orange' : 'black',
    transform: showMenu.open ? 'rotate(495DEG)' : '',
    position: showMenu.open ? 'absolute' : '',

  }

  const middle = {
    backgroundColor: showMenu.open ? 'orange' : 'black',
    transform: showMenu.open ? 'rotate(135DEG)' : '',
    position: showMenu.open ? 'absolute' : '',
  }

  const bottom = {
    backgroundColor: showMenu.open ? 'orange' : 'black',
    transform: showMenu.open ? 'rotate(580DEG)' : '',
    position: showMenu.open ? 'absolute' : '',
  }


  const hamburger = {
  }


  function handleClick() {
    SetShowMenu(prevState => ({
      open: !prevState.open
    }));

    if (showMenu.open === true) {
      const middle = document.getElementById('middle');
      middle.style.transform('rotate(45deg)')
    }


  }






  return (
    <div onClick={handleClick} style={hamburger}>
      <div className="hamburger">
        <span id='top' style={top} />
        <span id='middle' style={middle} />
        <span id='bottom' style={bottom} />
      </div>


      {showMenu.open ? (
        <div>
          {/* <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul> */}
        </div>
      ) : (
        <div>

        </div>
      )}

    </div>
  )
}

export default Menu;