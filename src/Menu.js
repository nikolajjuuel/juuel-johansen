import { useState } from "react";
import './menu.scss'

const Menu = () => {
  const [showMenu, SetShowMenu] = useState({
    open: false,
  });

  const middle = {
    backgroundColor: showMenu.open ? 'orange' : 'black',
    transform: showMenu.open ? 'rotate(40DEG)' : '',

  }

  const bottom = {
    backgroundColor: showMenu.open ? 'orange' : 'black',
    transform: showMenu.open ? 'rotate(115DEG)' : '',
  }

  const hamburger = {
    transform: showMenu.open ? 'rotate(27DEG)' : '',
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
        <span id='top' />
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