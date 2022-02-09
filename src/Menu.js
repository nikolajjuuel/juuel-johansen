import { useState } from "react";
import './menu.scss'

const Menu = () => {
  const [showMenu, SetShowMenu] = useState({
    open: false,
  });


  function handleClick() {
    SetShowMenu(prevState => ({
      open: !prevState.open
    }));

    const hambuger = document.getElementsByClassName('hambuger');
    console.log(hambuger)
    hambuger.classList.add("active");

  }




  return (
    <div className="hambuger" onClick={handleClick}>
      <span id='top' />
      <span id='middle' />
      <span id='bottom' />
      menu


      {showMenu.open ? (
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      ) : (
        <div>

        </div>
      )}

    </div>
  )
}

export default Menu;